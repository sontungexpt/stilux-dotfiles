#!/bin/bash

function fnm() {
  if [[ "$1" == "install" ]] &&  [[ "$2" == "node" ]]; then
  local new_node_version="$(command fnm ls-remote | grep -v - | tail -1)"
    command fnm install "$new_node_version" && command fnm default "$new_node_version"
  else
    command fnm "$@"
  fi
}

ROOT_MARKER=(".git", ".project", ".prettierrc", "pom.xml")
function cdg() {
  local dir=$PWD

  while [[ "$dir" != "/" ]]; do
    for marker in "${ROOT_MARKER[@]}"; do
      if [[ -f "$dir/$marker" ]] || [[ -d "$dir/$marker" ]]; then
        cd "$dir"
        return
      fi
    done
    dir="$(dirname "$dir")"
  done
  echo "No project root found"
}

function mvnw17() {
  # save the current directory so we can go back to it later
  local current_dir=$PWD
  # save the current JAVA_HOME so we can go back to it later
  local current_java_home=$JAVA_HOME
  local dir=$PWD

  while [[ "$dir" != "/" ]]; do
    if [[ -f "$dir/mvnw" ]]; then
      # cd "$dir"
      export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
      # eval "$dir/mvnw" "$@"

      # don't need to move to the root directory if you want to move to the root directory,
      # just uncomment 3 lines in the while loop block code and comment the following line
      eval "$dir/mvnw -f $dir/pom.xml" "$@"

      export JAVA_HOME=$current_java_home
      # cd "$current_dir"
      return
    fi
    dir="$(dirname "$dir")"
  done
  echo "No mvnw found"
}

alias mvnw='mvnw17'

function gradlew17() {
  local dir=$PWD

  while [[ "$dir" != "/" ]]; do
    if [[ -f "$dir/gradlew" ]]; then
      eval "$dir/gradlew -Dorg.gradle.java.home=/usr/lib/jvm/java-17-openjdk" "$@"
      return
    fi
    dir="$(dirname "$dir")"
  done
  echo "No gradlew found"
}

# alias gradlew17='./gradlew -Dorg.gradle.java.home=/usr/lib/jvm/java-17-openjdk'
alias ls="ls --color=auto"
alias lf="export PATH=${XDG_CONFIG_HOME:-$HOME/.config}/lf/bin:$PATH;lf $@"

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
alias dunstconfig='nvim ~/.config/dunst/dunstrc'
alias ewwconfig='nvim ~/.config/eww/eww.yuck'
