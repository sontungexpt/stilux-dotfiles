#!/bin/bash
# The scripts is wrote by TranVoSonTung

# Check if installed yay package manager
if ! command -v yay &>/dev/null; then
	echo "yay could not be found"
	exit
fi

# if installed yay package manager do
yay -S ibus ibus-bamboo
