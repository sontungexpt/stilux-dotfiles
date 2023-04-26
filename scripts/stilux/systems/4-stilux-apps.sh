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

	# echo "Installing brave..."
	# yay -S brave-bin

	# Ask if you want to install edge or chorme, default is edge
	echo "Do you want to install edge or chrome? (e/c)"
	read -r answer
	if [ "$answer" != "${answer#[Ee]}" ]; then
		echo ">>> Installing microsoft edge..."
		yay -S microsoft-edge-stable-bin
	else
		echo ">>> Installing google chrome..."
		yay -S google-chrome
	fi

	# Install desired apps
	echo ">>> Installing desired apps..."
	sudo pacman -S gimp inkscape kdenlive xcolor
	yay -S arc-kde-git figma-linux-bin

	# Install social apps
	echo ">>> Installing social apps..."
	echo ">>> Installing discord, teams..."
	sudo pacman -S discord teams

	# Cloud sync tools
	echo ">>> Installing cloud sync tools..."
	sudo pacman -S rclone

	# Install development apps
	echo ">>> Installing development apps..."
	sudo pacman -S --needed neovim
	yay -S --needed visual-studio-code-bin

	# Install dev environment
	echo ">>> Installing dev environment..."
	sudo pacman -S --needed clang cmake ninja pkgconf gtk3 xz

	# Python
	echo ">>> Installing python, pip..."
	sudo pacman -S python python-pip
	pip install pynvim

	# Nodejs
	ehco ">>> Installing nvm, nodejs, npm..."
	# sudo pacman -S nodejs npm
	yay -S nvm
	nvm install node
	npm install -g neovim

	# ruby
	echo ">>> Installing ruby, rbenv..."
	sed -i 's/eval "$(rbenv init -)"/# eval "$(rbenv init -)"/g' "$HOME/.zshrc"
	sed -i 's|export PATH="$HOME/.rbenv/bin:$PATH"|# export PATH="$HOME/.rbenv/bin:$PATH"|g' "$HOME/.zshrc"
	yay -S rbenv-git
	yay -S ruby-build
	sed -i 's/# eval "$(rbenv init -)"\s*=\s*\(.*\)/eval "$(rbenv init -)"/g' "$HOME/.zshrc"
	sed -i 's|# export PATH="$HOME/.rbenv/bin:$PATH"|export PATH="$HOME/.rbenv/bin:$PATH"|g' "$HOME/.zshrc"
	# find in .zshrc if not have eval "$(rbenv init -)" and export PATH="$HOME/.rbenv/bin:$PATH" then add it
	if ! grep -q 'export PATH="$HOME/.rbenv/bin:$PATH"' "$HOME/.zshrc"; then
		echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >>"$HOME/.zshrc"
	fi
	if ! grep -q "eval \"$(rbenv init -)\"" "$HOME/.zshrc"; then
		echo 'eval "$(rbenv init -)"' >>"$HOME/.zshrc"
	fi
	source "$HOME/.zshrc"
	zsh
	rbenv install "$(rbenv install -l | grep -v - | tail -1)"
	rbenv global "$(rbenv install -l | grep -v - | tail -1)"
	gem install neovim

	# Flutter
	# echo ">>>Installing flutter..."
	# mkdir -p "$HOME/.developments"
	# cd "$HOME/.developments" || exit
	# git clone https://github.com/flutter/flutter.git
	# cd "$HOME" || exit
	# sudo pacman -S clang cmake ninja pkgconf gtk3 xz
	# flutter doctor --android-licenses

	# Install android studio
	echo ">>> Installing android studio, jdk11..."
	sudo pacman -S openjdk11-src
	yay -S android-studio watchman

else
	echo "Skip installing stilux apps"
fi
