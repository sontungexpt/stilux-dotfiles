#!/bin/bash
# The scripts is written by TranVoSonTung
# The scripts is used to install stilux used apps in arch linux

YAY="yay -S --answerclean All --noconfirm --needed"
PACMAN="sudo pacman -S --noconfirm --needed"


# Ask if you want to install stilux apps
echo "Do you want to install stilux apps? (y/n)"
read -r answer
if [ "$answer" != "${answer#[Yy]}" ]; then
	# Check if installed yay, if not install it
	if ! [ -x "$(command -v yay)" ]; then
		eval "$PACMAN git base-devel"
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
	# eval "$PACMAN calcurse"

	# Ask if you want to install edge or chorme, default is edge
	echo "Do you want to install edge or chrome? (e/c)"
	read -r answer
	if [ "$answer" != "${answer#[Ee]}" ]; then
		echo ">>> Installing microsoft edge..."
		eval "$YAY microsoft-edge-stable-bin"
	else
		echo ">>> Installing google chrome..."
		eval "$YAY google-chrome"
	fi

	# Install desired apps
	echo ">>> Installing desired apps..."
	# ask if you want to install it now
	echo "Do you want to install desired apps now? (y/n)"
	read -r answer
	if [ "$answer" != "${answer#[Yy]}" ]; then
		echo ">>> Installing desired apps..."
		eval "$PACMAN gimp inkscape kdenlive"
		# check if has kdenlive app
		if [ -x "$(command -v kdenlive)" ]; then
			echo ">>> Installing kdenlive dark-theme..."
			eval "$YAY arc-kde-git"
		fi
		eval "$YAY figma-linux-bin"
	else
		echo ":: Skip installing desired apps"
	fi

	# Install social apps
	echo ">>> Installing discord..."
	eval "$PACMAN discord"

	# Cloud sync tools
	# echo ">>> Installing cloud sync tools..."
	# eval "$PACMAN rclone"

	# Install development apps
	echo ">>> Installing development apps..."
	eval "$PACMAN neovim"
	eval "$YAY visual-studio-code-bin"

	# Install dev environment
	echo ">>> Installing dev environment..."
	eval "$PACMAN clang cmake ninja pkgconf gtk3 xz"

	# Python
	echo ">>> Installing python, pip..."
	eval "$PACMAN python python-pip"
	python3 -m venv .venv
	source .venv/bin/activate
	pip install --upgrade pip
	pip install neovim

	# Nodejs
	ehco ">>> Installing nvm, nodejs, npm..."
	# eval "$PACMAN nodejs npm"
	eval "$YAY nvm"
	source "$HOME/.zshrc"
	nvm install node
	npm install -g neovim

	# ruby
	# echo ">>> Installing ruby, rbenv..."
	# sed -i 's/eval "$(rbenv init -)"/# eval "$(rbenv init -)"/g' "$HOME/.zshrc"
	# sed -i 's|export PATH="$HOME/.rbenv/bin:$PATH"|# export PATH="$HOME/.rbenv/bin:$PATH"|g' "$HOME/.zshrc"
	# eval "$YAY rbenv-git"
	# eval "$YAY ruby-build"
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
	# eval "$PACMAN clang cmake ninja pkgconf gtk3 xz"
	# flutter doctor --android-licenses

	# Install android studio
	echo ">>> Installing android studio, jdk11, jdk17..."
	eval "$PACMAN openjdk11-src openjdk17-src"
	eval "$YAY android-studio watchman"

	echo ">>> Installing mongodb..."
	eval "$YAY mongodb-bin mongosh-bin mongodb-compass mongodb-tools"
	sudo systemctl enable mongodb.service
	sudo systemctl start mongodb.service

	echo ">>> Installing rust..."
	eval "$PACMAN rustup"
	rustup default stable
	rustup component add rust-analyzer

	echo ">>> Installing ldoc..."
	eval "$PACMAN luarocks"
	luarocks install ldoc

	echo ">>> Installing plantuml"
	eval "$PACMAN plantuml graphviz"

	echo ">>> Installing tree"
	eval "$PACMAN tree"

else
	echo "Skip installing stilux apps"
fi