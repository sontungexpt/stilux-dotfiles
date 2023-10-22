#!/bin/bash
# The scripts is written by Tran Vo Son Tongue

YAY="yay -S --answerclean All --noconfirm --needed"
PACMAN="sudo pacman -S --noconfirm --needed"


curr_file_path="$(readlink -f "$0")"
systems_dir="$(dirname "$curr_file_path")"
stilux_dir="$(dirname "$systems_dir")"
users_dir="$stilux_dir/users"

file_paths=$(find "$users_dir" -type f)

for path in $file_paths; do
	filename=$(basename "$path")
	extension="${filename##*.}"
	if [ "$extension" = "unchecked" ]; then
		continue
	fi
	sudo cp "$path" /usr/bin/
done