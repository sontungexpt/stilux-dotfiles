#!/bin/bash
# The scripts is written by TranVoSonTung

# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	sudo pacman -S --needed git base-devel
	echo "Installing yay..."
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit
	makepkg -si
	cd ..
	rm -rf yay
fi

# Ask if you want to install stilux apps
echo "Do you want to install stilux apps? (y/n)"
read -r answer
if [ "$answer" != "${answer#[Yy]}" ]; then

	echo "Installing stilux apps..."

	# Calendar apps
	echo "Installing calcurse..."
	sudo pacman -S calcurse

	# Browser
	echo "Installing brave, google-chrome..."
	yay -S brave-bin google-chrome

	# Install desired apps
	echo "Installing desired apps..."
	sudo pacman -S gimp inkscape kdenlive xcolor
	yay -S arc-kde-git figma-linux-bin

	# Install social apps
	echo "Installing social apps..."
	sudo pacman -S discord teams

	# Install development apps
	echo "Installing development apps..."
	sudo pacman -S --needed code neovim

	# Install dev environment
	echo "Installing dev environment..."
	# python
	sudo pacman -S python python-pip
	pip install pynvim
	# nodejs
	sudo pacman -S nodejs npm
	npm install -g neovim
	# ruby
	yay -S rbenv-git
	rbenv install "$(rbenv install -l | grep -v - | tail -1)"

	# Flutter
	echo "Installing flutter..."
	mkdir "$HOME/.developments"
	cd "$HOME/.developments" || exit
	git clone https://github.com/flutter/flutter.git
	cd "$HOME" || exit
	sudo pacman -S clang cmake ninja pkgconf gtk3 xz
	flutter doctor --android-licenses

	# Install android studio
	echo "Installing android studio..."
	yay -S android-studio

else
	echo "Skip installing stilux apps"
fi
