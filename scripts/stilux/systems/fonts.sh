#!/bin/bash
# The scripts is written by TranVoSonTung

# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo "Installing yay..."
	sudo pacman -S --needed git base-devel
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit
	makepkg -si
	cd ..
	rm -rf yay
fi

# Install fonts
yay -S ttf-meslo-nerd-font-powerlevel10k
yay -S ttf-jetbrains-mono
yay -S ttf-ms-win11
yay -S ttf-adobe-source-code-pro-fonts
yay -S ttf-fira-code
yay -S nerd-fonts-git
yay -S ttf-hack-nerd
