#!/bin/bash

un_rar() {
	if [ ! -f "/usr/bin/unrar" ]; then
		echo "ERROR: You need to install unrar to extract file"
		exit 1
	fi
	local destination="${1//.rar/}"
	if [ ! -d "$destination" ]; then
		mkdir "$destination"
	fi
	unrar e "$1" "$destination"
}

un_zip() {
	if [ ! -f "/usr/bin/unzip" ]; then
		echo "You need to install unzip to extract file"
		exit 1
	fi

	local destination="${1//.zip/}"
	if [ ! -d "$destination" ]; then
		mkdir "$destination"
	fi
	unzip "$1" -d "$destination"
}

un_7z() {
	if [ ! -f "/usr/bin/7z" ]; then
		echo "ERROR: You need to install 7z to extract file"
		exit 1
	fi

	local destination="${1//.7z/}"
	if [ ! -d "$destination" ]; then
		mkdir "$destination"
	fi
	7z x "$1" -o"$destination"
}

case "$1" in
*.tar.bz | *.tar.bz2 | *.tbz | *.tbz2) tar xjvf "$1" ;;
*.tar.gz | *.tgz) tar xzvf "$1" ;;
*.tar.xz | *.txz) tar xJvf "$1" ;;
*.zip) un_zip "$1" ;;
*.rar) un_rar "$1" ;;
*.7z) un_7z "$1" ;;
*) echo -e "Unsupported format" && exit 1 ;;
esac
