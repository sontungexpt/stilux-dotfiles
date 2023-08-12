#!/bin/bash
# The scripts is written by TranVoSonTung

# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo ">>> Installing yay..."
	sudo pacman -S --needed git base-devel
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit 1
	makepkg -si
	cd ..
	rm -rf yay
fi

# Install fonts
yay -S ttf-meslo-nerd-font-powerlevel10k
yay -S ttf-jetbrains-mono-nerd
yay -S ttf-ms-win11-auto
yay -S ttf-adobe-source-code-pro-fonts
yay -S ttf-fira-code
yay -S ttf-hack-nerd
yay -S ttf-iosevka-nerd
yay -S ttf-material-design-icons
yay -S siji-git
yay -S otf-japanese-radicals-font
yay -S ttf-font-awesome
yay -S ttf-firacode-nerd
