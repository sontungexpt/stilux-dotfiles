ZDOTDIR=$HOME/.config/zsh

source $ZDOTDIR/options.zsh
source $ZDOTDIR/exports.zsh

source $ZDOTDIR/installer.zsh
ohmyzsh # install oh-my-zsh
theme "romkatv/powerlevel10k" # install powerlevel10k theme
# install plugins
plug "zsh-users/zsh-syntax-highlighting"
plug "zsh-users/zsh-autosuggestions"
plug "zsh-users/zsh-completions"
plug "lukechilds/zsh-nvm"
# plug "mroth/evalcache"

source "$ZDOTDIR"/oh-my-zsh.zsh
source $ZDOTDIR/aliases.zsh

