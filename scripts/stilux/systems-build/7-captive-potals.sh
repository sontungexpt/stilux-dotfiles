#!/bin/bash
# This scripts is written by Tran Vo Son Tung
# This scripts is use to configure the captive-potals network for the server

YAY="yay -S --answerclean All --noconfirm --needed"
PACMAN="sudo pacman -S --noconfirm --needed"


systems_dir="$(pwd)"
stilux_dir="$(dirname "$systems_dir")"
txts_dir="$stilux_dir/assets/txts"

cat "$txts_dir/captive-potals.txt" >>"/etc/NetworkManager/dispatcher.d/90-open_captive_portal"