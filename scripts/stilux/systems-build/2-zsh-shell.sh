#!/bin/bash
# The scripts is written by TranVoSonTung

YAY="yay -S --answerclean All --noconfirm --needed"
PACMAN="sudo pacman -S --noconfirm --needed"


curr_file_path="$(readlink -f "$0")"
systems_dir="$(dirname "$curr_file_path")"
stilux_dir="$(dirname "$systems_dir")"
scripts_dir="$(dirname "$stilux_dir")"
dotfiles_dir="$(dirname "$scripts_dir")"

eval "$PACMAN zsh"

# Set zsh as default shell
chsh -s "$(which zsh)"

# If not install git, install git
if ! [ -x "$(command -v git)" ]; then
	eval "$PACMAN git"
fi

# Add zsh config files
# Check if install zsh shell
if [ ! -f /usr/bin/zsh ]; then
	echo "zsh is not installed"
else
	cp "$dotfiles_dir/.zshrc" "$HOME"
	cp -r "$dotfiles_dir/.config/zsh" "$HOME"
fi