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
		echo "Installing microsoft edge..."
		yay -S microsoft-edge-stable-bin
	else
		echo "Installing google chrome..."
		yay -S google-chrome
	fi

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
	yay -S ruby-build
	rbenv install "$(rbenv install -l | grep -v - | tail -1)"

	# Flutter
	echo "Installing flutter..."
	mkdir -p "$HOME/.developments"
	cd "$HOME/.developments" || exit
	git clone https://github.com/flutter/flutter.git
	cd "$HOME" || exit
	sudo pacman -S clang cmake ninja pkgconf gtk3 xz
	flutter doctor --android-licenses

	# Kvm
	echo "Installing winapps through kvm..."
	sudo pacman -S qemu virt-manager virt-viewer freerdp dnsmasq vde2 bridge-utils openbsd-netcat libguestfs ebtables iptables
	echo '''
unix_sock_rw_perms = "0770"
unix_sock_group = "libvirt"
''' | sudo tee -a /etc/libvirt/libvirtd.conf &>/dev/null

	mkdir -p ~/.config/libvirt/
	echo 'uri_default = "qemu:///system"' >>~/.config/libvirt/libvirt.conf

	newgrp libvirt
	sudo usermod -aG libvirt "$(whoami)"

	# Install android studio
	echo "Installing android studio, jdk11..."
	sudo pacman -S openjdk11-src
	yay -S android-studio

	# Setup polybar-calendar
	echo "Setup polybar-calendar..."
	sudo pacman -S --needed python-wheel
	sudo pacman -S --needed base-devel openssl zlib git gobject-introspection
	sudo pacman -S --needed python-gobject gtk4
	sudo pacman -S --needed python cairo pkgconf gobject-introspection gtk4
	if ! [ -x "$(command -v pip3)" ]; then
		sudo pacman -S python-pip
	fi
	if [ -x "$(command -v pip3)" ]; then
		pip3 install pycairo
		pip3 install PyGObject
	fi
	if [ -f "$HOME/.config/polybar/scripts/polybar-calendar/calendar.sh" ]; then
		chmod +x "$HOME/.config/polybar/scripts/polybar-calendar/calendar.sh"
	else
		echo "ERROR: File $HOME/.config/polybar/scripts/polybar-calendar/calendar.sh not found"
	fi

	# Install dependencies for polybar gmail
	echo "Installing dependencies for polybar gmail..."
	if ! [ -x "$(command -v pip)" ]; then
		pip install --upgrade google-api-python-client google-auth-httplib2 google-auth-oauthlib
		if [ -f "$HOME/.config/polybar/gmail/auth.py" ]; then
			chmod +x "$HOME/.config/polybar/gmail/auth.py"
		else
			echo "ERROR: File $HOME/.config/polybar/gmail/auth.py not found"
		fi
		if [ -f "$HOME/.config/polybar/gmail/launch.py" ]; then
			chmod +x "$HOME/.config/polybar/gmail/launch.py"
		else
			echo "ERROR: File $HOME/.config/polybar/gmail/launch.py not found"
		fi
		if [ -f "$HOME/.config/polybar/gmail/list_labels.py" ]; then
			chmod +x "$HOME/.config/polybar/gmail/list_labels.py"
		else
			echo "ERROR: File $HOME/.config/polybar/gmail/list_labels.py not found"
		fi
	else
		echo "ERROR while installing dependencies for polybar gmail"
	fi

else
	echo "Skip installing stilux apps"
fi
