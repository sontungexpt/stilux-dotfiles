#!/bin/bash
# The scripts is wrote by TranVoSonTung
# Fonts
# ttf-ms-fonts
# ttf-cascadia-code
# Hack Nerd Font
# ttf-fira-code
# MesloLGS NF
# adobe-source-code-pro-fonts
# ttf-jetbrains-mono
# nerd-fonts-git

FLAG="-nopass"
PASS=""

# Use eval "$SUDO_COMMAND <Your command>" to exec the command with no password
SUDO_COMMAND="echo \"$PASS\" | sudo -S -k"
if [ "$FLAG" = "$1" ] && [ "$PASS" != "" ]; then
	# The scripts when  use flag "-nopass"

	echo "$2"
else
	# The scripts when not use flag "-nopass"
	echo "$2"
fi
