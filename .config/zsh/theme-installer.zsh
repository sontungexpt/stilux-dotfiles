#!/bin/bash

# usage: theme "zsh-users/zsh-autosuggestions"
theme() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [[ ! -d "$ZTHEMEDIR"/"$plug_name" ]]; then
		mkdir -p "$ZTHEMEDIR"
		git clone "https://github.com/$1.git" "$ZTHEMEDIR/$plug_name"
	fi
}
