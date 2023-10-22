# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

# User configuration

# Path
# Rbenv
# export PATH="$HOME/.rbenv/bin:$PATH"
# eval "$(rbenv init -)"

export EDITOR=nvim
export VISUAL=nvim

# Flutter
# export PATH="$PATH:/home/stilux/.developments/flutter/bin"
export JAVA_HOME="/usr/lib/jvm/java-11-openjdk"
export PATH=$PATH:$JAVA_HOME/bin

# Emulator
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools

export PATH="$HOME/.cargo/bin/:$PATH"
# # Ibus
# export GTK_IM_MODULE=ibus
# export XMODIFIERS=@im=ibus
# export QT_IM_MODULE=ibus
# ibus-daemon -drx

# Nvm
# If install with the instructions on github uncomment two line below
# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# install with yay use this line
source /usr/share/nvm/init-nvm.sh

# Aliases
alias lf="lfrun"

# ldoc
alias ldoc='ldoc-custom default'

# Git Bare
alias config='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'
alias config-add-setup='cp $HOME/scripts/setup $HOME/setup && config add setup && config commit -m "chore: update setup file scripts" && config push && rm ~/setup'

# Rclone
# alias uitpush='rclone sync ~/Data/UIT/ uit-drive:UIT/'
# alias uitpull='rclone sync uit-drive:UIT/ ~/Data/UIT/'
# alias sontungpush='rclone sync ~/Data/SonTung/ sontungexpt-drive:SonTung/'
# alias sontungpull='rclone sync sontungexpt-drive:SonTung/ ~/Data/SonTung/'

# Config alias
alias nvimconfig='nvim ~/.config/nvim/init.lua'
alias i3config='nvim ~/.config/i3/config'
alias lfconfig='nvim ~/.config/lf/lfrc'
alias zshconfig='nvim ~/.zshrc'
alias polybarconfig='nvim ~/.config/polybar/config.ini'
alias roficongfig='nvim ~/.config/rofi/config.rasi'
alias picomconfig='nvim ~/.config/picom/picom.conf'
alias kittyconfig='nvim ~/.config/kitty/kitty.conf'
alias alacrittyconfig='nvim ~/.config/alacritty/alacritty.yml'
