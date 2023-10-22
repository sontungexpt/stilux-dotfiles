#!/bin/bash

# usage: plug "zsh-users/zsh-autosuggestions"
plug() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [[ ! -d "$ZPLUGDIR"/"$plug_name" ]]; then
		mkdir -p "$ZPLUGDIR"
		git clone --depth=1 "https://github.com/$1.git" "$ZPLUGDIR/$plug_name"
	fi
}

theme() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [[ ! -d "$ZTHEMEDIR"/"$plug_name" ]]; then
		mkdir -p "$ZTHEMEDIR"
		git clone --depth=1 "https://github.com/$1.git" "$ZTHEMEDIR/$plug_name"
	fi
}

ohmyzsh() {
	if [ ! -d "$ZSH" ]; then
		if ! command -v curl &>/dev/null; then
			echo "curl could not be found"
			return
		fi

		sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)" --no-templates
	fi
}
