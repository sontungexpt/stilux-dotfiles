#!/bin/bash

alias ls="ls --color=auto"
alias lf="lfrun"

# ldoc
alias ldoc='ldoc-custom default'

# Git Bare
alias config='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'
alias config-add-setup='cp $HOME/scripts/setup $HOME/setup && config add setup && config commit -m "chore: update setup file scripts" && config push && rm ~/setup'

# Config alias
alias nvimconfig='nvim ~/.config/nvim/init.lua'
alias i3config='nvim ~/.config/i3/config'
alias lfconfig='nvim ~/.config/lf/lfrc'
alias zshconfig='nvim ~/.config/zsh/.zshrc'
alias polybarconfig='nvim ~/.config/polybar/config.ini'
alias roficonfig='nvim ~/.config/rofi/config.rasi'
alias picomconfig='nvim ~/.config/picom/picom.conf'
alias kittyconfig='nvim ~/.config/kitty/kitty.conf'
alias alacrittyconfig='nvim ~/.config/alacritty/alacritty.yml'
