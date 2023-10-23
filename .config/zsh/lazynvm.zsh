#!/bin/bash

# * https://www.reddit.com/r/node/comments/4tg5jg/lazy_load_nvm_for_faster_shell_start/d5ib9fs
# * http://broken-by.me/lazy-load-nvm/
# * https://github.com/creationix/nvm/issues/781#issuecomment-236350067
[ -z "$NVM_DIR" ] && export NVM_DIR="$HOME/.nvm"

# Skip adding binaries if there is no node version installed yet
if [ -d "$NVM_DIR"/versions/node ]; then
	NODE_GLOBALS=($(find "$NVM_DIR"/versions/node -maxdepth 3 \( -type l -o -type f \) -wholename '*/bin/*' | xargs -n1 basename | sort | uniq))
fi
NODE_GLOBALS+=("nvm")

load_nvm() {
	# Unset placeholder functions
	for cmd in "${NODE_GLOBALS[@]}"; do unset -f "${cmd}" &>/dev/null; done

	# Load NVM
	if [[ -f "/usr/share/nvm/init-nvm.sh" ]]; then
		# Install nvm by yay
		source /usr/share/nvm/init-nvm.sh
	else
		# Install nvm by manual
		[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
	fi

	# (Optional) Set the version of node to use from ~/.nvmrc if available
	[ -f "$HOME/.nvmrc" ] && nvm use 2>/dev/null 1>&2 || true

	# Do not reload nvm again
	export NVM_LOADED=1
}

for cmd in "${NODE_GLOBALS[@]}"; do
	# Skip defining the function if the binary is already in the PATH
	if ! which "${cmd}" &>/dev/null; then
		eval "${cmd}() { unset -f ${cmd} &>/dev/null; [ -z \${NVM_LOADED+x} ] && load_nvm; ${cmd} \$@; }"
	fi
done

if [[ "$NVM_LOAD_BEFORE_NEOVIM" == 1 ]] || [[ "$NVM_LOAD_BEFORE_NEOVIM" == true ]]; then
	nvim() {
		unset -f nvim &>/dev/null
		[ -z "${NVM_LOADED+x}" ] && load_nvm
		command nvim "$@"
	}
fi
