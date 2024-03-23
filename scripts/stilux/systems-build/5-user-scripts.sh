#!/bin/bash
# The scripts is written by Tran Vo Son Tongue

curr_file_path="$(readlink -f "$0")"
systems_dir="$(dirname "$curr_file_path")"
stilux_dir="$(dirname "$systems_dir")"
users_dir="$stilux_dir/users"

file_paths=$(find "$users_dir" -type f -not \( -name "*.unchecked" -o -name "*.old" \))

for path in $file_paths; do
	sudo cp "$path" /usr/bin/
done
