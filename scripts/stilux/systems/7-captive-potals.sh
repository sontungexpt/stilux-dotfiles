#!/bin/bash
# This scripts is written by Tran Vo Son Tongue
# This scripts is use to configure the captive-potals network for the server

curr_file_path="$(readlink -f "$0")"
systems_dir="$(dirname "$curr_file_path")"
stilux_dir="$(dirname "$systems_dir")"
txts_dir="$stilux_dir/assets/txts"

sudo cp "$txts_dir/captive-potals.txt" /etc/NetworkManager/dispatcher.d/90-open_captive_portal && echo "==> INFO: Create /etc/NetworkManager/dispatcher.d/90-open_captive_portal successfully"
