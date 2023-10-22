#!/bin/bash

export EDITOR="nvim"
export VISUAL="nvim"

export ZSH="$HOME/.local/share/oh-my-zsh"
export ZPLUGDIR="$ZSH/custom/plugins/"
export ZTHEMEDIR="$ZSH/custom/themes"
export HISTFILE="$HOME/.config/zsh/.zhistory" # History filepath

export HISTSIZE=1000 # Maximum events for internal history
export SAVEHIST=1000 # Maximum events in history file

# Old bash config
export PATH="$PATH":"$HOME"/bin:/usr/local/bin
export PATH="$PATH":"$HOME"/.local/bin

# Java
export JAVA_HOME="/usr/lib/jvm/java-11-openjdk"
export PATH="$PATH":"$JAVA_HOME"/bin

# Emulator
export ANDROID_HOME="$HOME"/Android/Sdk
export PATH="$PATH":"$ANDROID_HOME"/emulator
export PATH="$PATH":"$ANDROID_HOME"/platform-tools

# Cargo
export PATH="$PATH":"$HOME"/.cargo/bin

# Nvm
source /usr/share/nvm/init-nvm.sh
