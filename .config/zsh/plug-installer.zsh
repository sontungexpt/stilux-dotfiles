#!/bin/bash

_source() {
	[[ -f "$1" ]] && source "$1"
}

# usage: plug "zsh-users/zsh-autosuggestions"
plug() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [[ ! -d "$ZPLUGDIR"/"$plug_name" ]]; then
		mkdir -p "$ZPLUGDIR"
		git clone "https://github.com/$1.git" "$ZPLUGDIR/$plug_name"

		[[ plug_name = "zsh-completions" ]] && rm -f "$ZDOTDIR/.zcompdump"
	fi

	if [[ plug_name = "zsh-completions" ]]; then
		source "$ZDOTDIR/completion.zsh"
	fi

	_source "$ZPLUGDIR/$plug_name/$plug_name.plugin.zsh"
	_source "$ZPLUGDIR/$plug_name/$plug_name.zsh"
}
