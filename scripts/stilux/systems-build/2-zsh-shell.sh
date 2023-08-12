#!/bin/bash
# The scripts is written by TranVoSonTung

YAY="yay -S --answerclean All --noconfirm --needed"
PACMAN="sudo pacman -S --noconfirm --needed"


systems_dir="$(pwd)"
stilux_dir="$(dirname "$systems_dir")"
scripts_dir="$(dirname "$stilux_dir")"
dotfiles_dir="$(dirname "$scripts_dir")"

eval "$PACMAN zsh"

# Set zsh as default shell
chsh -s "$(which zsh)"

# Check if install curl
# If not install curl, install curl
if ! [ -x "$(command -v curl)" ]; then
	eval "$PACMAN curl"
fi

# Check if install git
# If not install git, install git
if ! [ -x "$(command -v git)" ]; then
	eval "$PACMAN git"
fi

zsh

# Install oh-my-zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

# Themes
# Install powerlevel10k
git clone https://github.com/romkatv/powerlevel10k.git "$ZSH_CUSTOM/themes/powerlevel10k"

# Plugins
# Install zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting"

# Install zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions "${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions"

# Install zsh-completions
git clone https://github.com/zsh-users/zsh-completions "${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-completions"

# Add zsh config files
# Check if install zsh shell
if [ ! -f /usr/bin/zsh ]; then
	echo "zsh is not installed"
else
	cp "$dotfiles_dir/.zshrc" "$HOME"

	if [ ! -f /usr/bin/p10k ]; then
		echo "p10k is not installed"
	else
		cp "$dotfiles_dir/.p10k.zsh" "$HOME"
	fi
fi