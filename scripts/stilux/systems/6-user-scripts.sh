#!/bin/bash
# The scripts is written by Tran Vo Son Tung

systems_dir="$(pwd)"                   # get the path of systems folder
stilux_dir="$(dirname "$systems_dir")" # get the path of stilux folder
users_dir="$stilux_dir/users"          # get the path of .config folder")

file_paths=$(find "$users_dir" -type f)
for path in $file_paths; do
	sudo cp "$path" /usr/bin/
done
