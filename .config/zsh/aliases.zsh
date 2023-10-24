#!/bin/bash

alias ls="ls --color=auto"
# alias lf="lfrun"

# ldoc
alias ldoc='ldoc-custom default'

# Git Bare
alias config='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'
alias config-add-setup='cp $HOME/scripts/setup $HOME/setup && config add setup && config commit -m "chore: update setup file scripts" && config push && rm ~/setup'

# Config alias
alias nvimconfig='nvim ~/.config/nvim/init.lua'
alias i3config='nvim ~/.config/i3/config'
alias lfconfig='nvim ~/.config/lf/lfrc'
alias zshconfig='nvim ~/.zshrc'
alias zshalias='nvim ~/.config/zsh/aliases.zsh'
alias zshexport='nvim ~/.config/zsh/exports.zsh'
alias zshoption='nvim ~/.config/zsh/options.zsh'
alias ohmyzshconfig='nvim ~/.config/zsh/oh-my-zsh.zsh'
alias polybarconfig='nvim ~/.config/polybar/config.ini'
alias roficonfig='nvim ~/.config/rofi/config.rasi'
alias picomconfig='nvim ~/.config/picom/picom.conf'
alias kittyconfig='nvim ~/.config/kitty/kitty.conf'
alias alacrittyconfig='nvim ~/.config/alacritty/alacritty.yml'
alias fishconfig='nvim ~/.config/fish/config.fish'
