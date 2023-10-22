ZDOTDIR=$HOME/.config/zsh

source $ZDOTDIR/options.zsh
source $ZDOTDIR/exports.zsh

source $ZDOTDIR/installer.zsh
# install oh-my-zsh
ohmyzsh
 # install theme
theme "romkatv/powerlevel10k"
# install plugins
plug "zdharma-continuum/fast-syntax-highlighting"
plug "zsh-users/zsh-autosuggestions"
plug "zsh-users/zsh-completions"
plug "lukechilds/zsh-nvm"
# plug "zsh-users/zsh-syntax-highlighting"
# plug "mroth/evalcache"

source "$ZDOTDIR"/oh-my-zsh.zsh
source $ZDOTDIR/aliases.zsh

