#!/bin/bash
# The scripts is written by TranVoSonTung

YAY="yay -S --answerclean All --noconfirm --needed"
PACMAN="sudo pacman -S --noconfirm --needed"


# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo ">>> Installing yay..."
	eval "$PACMAN git base-devel"
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit 1
	makepkg -si
	cd ..
	rm -rf yay
fi

# Install fonts
eval "$YAY ttf-meslo-nerd-font-powerlevel10k"
eval "$YAY ttf-jetbrains-mono-nerd"
eval "$YAY ttf-adobe-source-code-pro-fonts"
eval "$YAY ttf-fira-code"
eval "$YAY ttf-hack-nerd"
eval "$YAY ttf-iosevka-nerd"
eval "$YAY ttf-material-design-icons"
eval "$YAY siji-git"
eval "$YAY otf-japanese-radicals-font"
eval "$YAY ttf-font-awesome"
eval "$YAY ttf-firacode-nerd"
eval "$YAY ttf-ms-fonts"