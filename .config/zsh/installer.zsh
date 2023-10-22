#!/bin/bash

ohmyzsh() {
	if [ ! -d "$ZSH" ]; then
		git clone --depth=1 https://github.com/ohmyzsh/ohmyzsh.git "$ZSH"
	fi
}

# Auto install plugin
# usage: plug "zsh-users/zsh-autosuggestions"
# Auto remove plugin if second argument is false
# usage: plug "zsh-users/zsh-autosuggestions" false
plug() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [ "$2" = false ]; then
		rm -rf "$ZPLUGDIR"/"$plug_name"
		sed -i -e "s|[[:blank:]]*plug[[:blank:]]*[\"' ]$1[\"' ][[:blank:]]*false|# plug \"$1\"|g" "$HOME/.zshrc"
	else
		if [[ ! -d "$ZPLUGDIR"/"$plug_name" ]]; then
			git clone --depth=1 "https://github.com/$1.git" "$ZPLUGDIR/$plug_name"
		fi

		# for oh-my-zsh
		plugins+=($plug_name)
	fi
}

theme() {
	local plug_name
	plug_name=$(echo "$1" | cut -d '/' -f 2)

	if [[ ! -d "$ZTHEMEDIR"/"$plug_name" ]]; then
		git clone --depth=1 "https://github.com/$1.git" "$ZTHEMEDIR/$plug_name"
	fi
}
