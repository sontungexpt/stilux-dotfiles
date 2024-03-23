#!/bin/bash
# The scripts is written by TranVoSonTung
# The scripts is used to install stilux used apps in arch linux

# Ask if you want to install stilux apps
echo "Do you want to install stilux apps? (y/n)"
read -r answer
if [ "$answer" != "${answer#[Yy]}" ]; then
	# Check if installed yay, if not install it
	if ! [ -x "$(command -v yay)" ]; then
sudo pacman -S --needed git base-devel --noconfirm
		echo "Installing yay..."
		git clone https://aur.archlinux.org/yay.git
		cd yay || exit 1
		makepkg -si
		cd ..
		rm -rf yay
	fi

	echo ">>> Installing stilux apps..."

	# Create dotfiles folder
	git init --bare "$HOME/dotfiles"
	zsh
	source "$HOME/.zshrc"
	config config --local status.showUntrackedFiles no

	# Calendar apps
	# echo ">>> Installing calcurse..."
	# sudo pacman -S calcurse

	# Ask if you want to install edge or chorme, default is edge
	echo "Do you want to install edge or chrome? (e/c)"
	read -r answer
	if [ "$answer" != "${answer#[Ee]}" ]; then
		echo ">>> Installing microsoft edge..."
yay -S microsoft-edge-stable-bin --answerclean All --noconfirm --needed
	else
		echo ">>> Installing google chrome..."
yay -S google-chrome --answerclean All --noconfirm --needed
	fi

	# Install desired apps
	echo ">>> Installing desired apps..."
	# ask if you want to install it now
	echo "Do you want to install desired apps now? (y/n)"
	read -r answer
	if [ "$answer" != "${answer#[Yy]}" ]; then
		echo ">>> Installing desired apps..."
sudo pacman -S gimp inkscape kdenlive --noconfirm --needed
		# check if has kdenlive app
		if [ -x "$(command -v kdenlive)" ]; then
			echo ">>> Installing kdenlive dark-theme..."
yay -S arc-kde-git --answerclean All --noconfirm --needed
		fi
yay -S figma-linux-bin --answerclean All --noconfirm --needed
	else
		echo ":: Skip installing desired apps"
	fi

	# Install social apps
	echo ">>> Installing discord..."
sudo pacman -S discord --noconfirm --needed

	# Cloud sync tools
	# echo ">>> Installing cloud sync tools..."
	# sudo pacman -S rclone

	# Install development apps
	echo ">>> Installing development apps..."
sudo pacman -S --needed neovim --noconfirm
yay -S --needed visual-studio-code-bin --answerclean All --noconfirm

	# Install dev environment
	echo ">>> Installing dev environment..."
sudo pacman -S --needed clang cmake ninja pkgconf gtk3 xz --noconfirm

	# Python
	echo ">>> Installing python, pip..."
sudo pacman -S --needed python python-pip --noconfirm
	python3 -m venv .venv
	source .venv/bin/activate
	pip install --upgrade pip
	pip install neovim

	# Nodejs
	# echo ">>> Installing nodejs, npm with nvm"
	# sudo pacman -S nodejs npm
	# yay -S nvm
	# nvm install node
	echo ">>> Installing fnm, nodejs, npm..."
yay -S fnm --answerclean All --noconfirm --needed
	fnm install "$(fnm ls-remote | grep -v - | tail -1)" && fnm default "$(fnm ls-remote | grep -v - | tail -1)"
	source "$HOME/.zshrc"
	npm install -g neovim

	# ruby
	# echo ">>> Installing ruby, rbenv..."
	# sed -i 's/eval "$(rbenv init -)"/# eval "$(rbenv init -)"/g' "$HOME/.zshrc"
	# sed -i 's|export PATH="$HOME/.rbenv/bin:$PATH"|# export PATH="$HOME/.rbenv/bin:$PATH"|g' "$HOME/.zshrc"
	# yay -S rbenv-git
	# yay -S ruby-build
	# sed -i 's/# eval "$(rbenv init -)"\s*=\s*\(.*\)/eval "$(rbenv init -)"/g' "$HOME/.zshrc"
	# sed -i 's|# export PATH="$HOME/.rbenv/bin:$PATH"|export PATH="$HOME/.rbenv/bin:$PATH"|g' "$HOME/.zshrc"

	# if ! grep -q 'export PATH="$HOME/.rbenv/bin:$PATH"' "$HOME/.zshrc"; then
	# 	echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >>"$HOME/.zshrc"
	# fi
	# if ! grep -q "eval \"$(rbenv init -)\"" "$HOME/.zshrc"; then
	# 	echo 'eval "$(rbenv init -)"' >>"$HOME/.zshrc"
	# fi
	# source "$HOME/.zshrc"
	# zsh
	# rbenv install "$(rbenv install -l | grep -v - | tail -1)"
	# rbenv global "$(rbenv install -l | grep -v - | tail -1)"
	# gem install neovim

	# Flutter
	# echo ">>>Installing flutter..."
	# mkdir -p "$HOME/.developments"
	# cd "$HOME/.developments" || exit
	# git clone https://github.com/flutter/flutter.git
	# cd "$HOME" || exit
	# sudo pacman -S clang cmake ninja pkgconf gtk3 xz
	# flutter doctor --android-licenses

	# Install android studio
	echo ">>> Installing android studio, jdk11, jdk17..."
sudo pacman -S openjdk11-src openjdk17-src --noconfirm --needed
yay -S android-studio watchman --answerclean All --noconfirm --needed

	echo ">>> Installing mongodb..."
yay -S mongodb-bin mongosh-bin mongodb-compass mongodb-tools --answerclean All --noconfirm --needed
	sudo systemctl enable mongodb.service
	sudo systemctl start mongodb.service

	echo ">>> Installing rust..."
sudo pacman -S rustup --noconfirm --needed
	rustup default stable
	rustup component add rust-analyzer

	echo ">>> Installing ldoc..."
sudo pacman -S luarocks --noconfirm --needed
	luarocks install ldoc

	echo ">>> Installing plantuml"
sudo pacman -S plantuml graphviz --noconfirm --needed

	echo ">>> Installing tree"
sudo pacman -S tree --noconfirm --needed

else
	echo "Skip installing stilux apps"
fi
