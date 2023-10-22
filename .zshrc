ZDOTDIR=$HOME/.config/zsh

source $ZDOTDIR/options.zsh
source $ZDOTDIR/exports.zsh

# Auto install plugins, themes
source $ZDOTDIR/installer.zsh
ohmyzsh
theme "romkatv/powerlevel10k"
plug "zsh-users/zsh-syntax-highlighting"
plug "zsh-users/zsh-autosuggestions"
plug "zsh-users/zsh-completions"

source $ZDOTDIR/oh-my-zsh.zsh
source $ZDOTDIR/aliases.zsh
