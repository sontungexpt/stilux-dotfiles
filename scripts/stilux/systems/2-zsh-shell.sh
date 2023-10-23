#!/bin/bash
# The scripts is written by TranVoSonTung

curr_file_path="$(readlink -f "$0")"
systems_dir="$(dirname "$curr_file_path")"
stilux_dir="$(dirname "$systems_dir")"
scripts_dir="$(dirname "$stilux_dir")"
dotfiles_dir="$(dirname "$scripts_dir")"

sudo pacman -S zsh

# Set zsh as default shell
chsh -s "$(which zsh)"

# If not install git, install git
if ! [ -x "$(command -v git)" ]; then
	sudo pacman -S git
fi

# Add zsh config files
# Check if install zsh shell
if [ ! -f /usr/bin/zsh ]; then
	echo "zsh is not installed"
else
	cp "$dotfiles_dir/.zshrc" "$HOME"
	cp -r "$dotfiles_dir/.config/zsh" "$HOME"
fi
