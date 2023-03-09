#!/bin/bash
# The scripts is wrote by TranVoSonTung

# Install zip and unzip
sudo pacman -S zip unzip

# Check if installed yay package manager
if ! command -v yay &>/dev/null; then
	echo "yay could not be found"
	exit
fi

# Install rar and unrar
yay -S rar unrar
