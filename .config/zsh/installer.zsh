#!/bin/bash

# usage: plug "zsh-users/zsh-autosuggestions"
plug() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [[ ! -d "$ZPLUGDIR"/"$plug_name" ]]; then
		git clone --depth=1 "https://github.com/$1.git" "$ZPLUGDIR/$plug_name"
	fi
}

theme() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [[ ! -d "$ZTHEMEDIR"/"$plug_name" ]]; then
		git clone --depth=1 "https://github.com/$1.git" "$ZTHEMEDIR/$plug_name"
	fi
}

ohmyzsh() {
	if [ ! -d "$ZSH" ]; then
		git clone --depth=1 https://github.com/ohmyzsh/ohmyzsh.git "$ZSH"
	fi
}
