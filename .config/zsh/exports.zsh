#!/bin/bash

export EDITOR="nvim"
export VISUAL="nvim"

export ZSH="$HOME/.local/share/oh-my-zsh"
export ZSH_CUSTOM="$ZSH/custom"
export ZPLUGDIR="$ZSH_CUSTOM/plugins/"
export ZTHEMEDIR="$ZSH_CUSTOM/themes"
export HISTFILE="$HOME/.config/zsh/.zhistory" # History filepath

export HISTSIZE=1000 # Maximum events for internal history
export SAVEHIST=1000 # Maximum events in history file

# Old bash config
export PATH="$PATH":"$HOME"/.local/bin:"$HOME"/bin:/usr/local/bin

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
export NVM_LAZY_LOAD=true
export NVM_COMPLETION=true

# source /usr/share/nvm/init-nvm.sh
lazy_load_nvm() {
	unset -f npm node nvm
	[[ -f "/usr/share/nvm/init-nvm.sh" ]] && source /usr/share/nvm/init-nvm.sh
}

node() {
	lazy_load_nvm
	node $@
}

npm() {
	lazy_load_nvm
	npm $@
}

nvm() {
	lazy_load_nvm
	nvm $@
}
