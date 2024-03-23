#!/bin/bash
# The scripts is written by TranVoSonTung

# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo ">>> Installing yay..."
sudo pacman -S --needed git base-devel --noconfirm
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit 1
	makepkg -si
	cd ..
	rm -rf yay
fi

# Install fonts
yay -S ttf-meslo-nerd-font-powerlevel10k --answerclean All --noconfirm --needed
yay -S ttf-adobe-source-code-pro-fonts --answerclean All --noconfirm --needed
yay -S ttf-hack-nerd --answerclean All --noconfirm --needed
yay -S ttf-iosevka-nerd --answerclean All --noconfirm --needed
yay -S ttf-firacode-nerd --answerclean All --noconfirm --needed
yay -S ttf-ms-fonts --answerclean All --noconfirm --needed
yay -S ttf-material-design-icons --answerclean All --noconfirm --needed
# yay -S ttf-jetbrains-mono-nerd
# yay -S ttf-font-awesome
# yay -S ttf-fira-code
# yay -S siji-git
# yay -S otf-japanese-radicals-font
