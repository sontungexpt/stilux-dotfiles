export ZDOTDIR="$HOME/.config/zsh"
source ${ZDOTDIR}/exports.zsh

if [ ! -d "$ZSH" ]; then
	if ! command -v curl &>/dev/null; then
		echo "curl could not be found"
		return
	fi

	sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
fi

source ${ZDOTDIR}/plug-installer.zsh
source ${ZDOTDIR}/theme-installer.zsh

theme "romkatv/powerlevel10k"
plug "zsh-users/zsh-syntax-highlighting"
plug "zsh-users/zsh-autosuggestions"
plug "zsh-users/zsh-completions"

source $ZDOTDIR/oh-my-zsh.zsh
source $ZDOTDIR/aliases.zsh

