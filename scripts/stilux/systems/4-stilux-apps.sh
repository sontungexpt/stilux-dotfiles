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

	# Create dotfiles folder
	git init --bare "$HOME/dotfiles"
	zsh
	source "$HOME/.zshrc"
	config config --local status.showUntrackedFiles no

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
	echo "Installing discord, teams..."
	sudo pacman -S discord teams

	# Cloud sync tools
	echo "Installing cloud sync tools..."
	sudo pacman -S rclone

	# Install development apps
	echo "Installing development apps..."
	sudo pacman -S --needed code neovim

	# Install dev environment
	echo "Installing dev environment..."

	# Python
	echo "Installing python, pip..."
	sudo pacman -S python python-pip
	pip install pynvim

	# Nodejs
	ehco "Installing nodejs, npm..."
	sudo pacman -S nodejs npm
	npm install -g neovim

	# ruby
	echo "Installing ruby, rbenv..."
	yay -S rbenv-git
	rbenv install "$(rbenv install -l | grep -v - | tail -1)"

	# Flutter
	echo "Installing flutter..."
	mkdir -p "$HOME/.developments"
	cd "$HOME/.developments" || exit
	git clone https://github.com/flutter/flutter.git
	cd "$HOME" || exit
	sudo pacman -S clang cmake ninja pkgconf gtk3 xz
	flutter doctor --android-licenses

	# Install android studio
	echo "Installing android studio, jdk11..."
	sudo pacman -S openjdk11-src
	yay -S android-studio

else
	echo "Skip installing stilux apps"
fi
