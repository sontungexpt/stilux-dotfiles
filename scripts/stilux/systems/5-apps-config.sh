#!/bin/bash
# The scripts is written by TranVoSonTung

systems_dir="$(pwd)"                     # get the path of systems folder
stilux_dir="$(dirname "$systems_dir")"   # get the path of stilux folder
scripts_dir="$(dirname "$stilux_dir")"   # get the path of stilux folder
dotfiles_dir="$(dirname "$scripts_dir")" # get the path of dotfiles folder
configs_dir="$dotfiles_dir/.config"      # get the path of .config folder")

# Make sure that the .config folder is exist
mkdir -p ~/.config/

# Copy the .bashrc file
rm -rf ~/.bashrc && cp "$dotfiles_dir/.bashrc" ~/

# Check if have .xinitrc file
if [ ! -f ~/.xinitrc ]; then
	echo "xinitrc is not exist"
else
	# I3
	if cat <"$HOME/.xinitrc" | tr "," "\n" | grep -xqF "exec i3"; then
		echo -e "\nExec I3 is already exist in .xinitrc"
	else
		echo -e "\n# I3" >>"$HOME/.xinitrc"
		echo "exec i3" >>"$HOME/.xinitrc"
	fi

	# betterlockscreen
	echo -e "\n# Betterlockscreen" >"$HOME/.xinitrc"
	echo "betterlockscreen -w dim" >>"$HOME/.xinitrc"
	echo "source ~/.fehbg" >>"$HOME/.xinitrc"

fi

rm -rf ~/.config/background/ && cp -r "$configs_dir/background/" ~/.config/

# Check iff install betterlockscreen
if [ ! -f /usr/bin/betterlockscreen ]; then
	echo "betterlockscreen is not installed"
else
	rm -rf ~/.config/betterlockscreen/ && cp -r "$configs_dir/betterlockscreen/" ~/.config/
fi

# Check if install btop
if [ ! -f /usr/bin/btop ]; then
	echo "btop is not installed"
else
	rm -rf ~/.config/btop/ && cp -r "$configs_dir/btop/" ~/.config/
fi

# Check if install calcurse
if [ ! -f /usr/bin/calcurse ]; then
	echo "calcurse is not installed"
else
	rm -rf ~/.config/calcurse/ && cp -r "$configs_dir/calcurse/" ~/.config/
fi

# Check if install dunst
if [ ! -f /usr/bin/dunst ]; then
	echo "dunst is not installed"
else
	rm -rf ~/.config/dunst/ && cp -r "$configs_dir/dunst/" ~/.config/
fi

# Check if install feh
if [ ! -f /usr/bin/feh ]; then
	echo "feh is not installed"
else
	rm -rf ~/.config/feh/ && cp -r "$configs_dir/feh/" ~/.config/
fi

# Check if install i3
if [ ! -f /usr/bin/i3 ]; then
	echo "i3 is not installed"
else
	rm -rf ~/.config/i3/ && cp -r "$configs_dir/i3/" ~/.config/
fi

# Check if install kitty
if [ ! -f /usr/bin/kitty ]; then
	echo "kitty terminal is not installed"
else
	rm -rf ~/.config/kitty/ && cp -r "$configs_dir/kitty/" ~/.config/
fi

# Check if install lf file manager
if [ ! -f /usr/bin/lf ]; then
	echo "lf file manager is not installed"
else
	rm -rf ~/.config/lf/ && cp -r "$configs_dir/lf/" ~/.config/
fi

# Check if install neofetch
if [ ! -f /usr/bin/neofetch ]; then
	echo "neofetch is not installed"
else
	rm -rf ~/.config/neofetch/ && cp -r "$configs_dir/neofetch/" ~/.config/
fi

# Check if install neovim
if [ ! -f /usr/bin/nvim ]; then
	echo "neovim is not installed"
else
	rm -rf ~/.config/nvim/ && cp -r "$configs_dir/nvim/" ~/.config/
fi

# Check if install picom
if [ ! -f /usr/bin/picom ]; then
	echo "picom is not installed"
else
	rm -rf ~/.config/picom/ && cp -r "$configs_dir/picom/" ~/.config/
fi

# Check if install polybar
if [ ! -f /usr/bin/polybar ]; then
	echo "polybar is not installed"
else
	rm -rf ~/.config/polybar/ && cp -r "$configs_dir/polybar/" ~/.config/
	if [ -d "$HOME/.config/polybar/gmail/authenticates/" ]; then
		mv "$HOME/polybar/gmail/authenticates/" "$HOME/.config/polybar/gmail/authenticates-backup/"
	fi
	mkdir -p "$HOME/.config/polybar/gmail/authenticates/"
	# Change color echo
	echo -e "\e[1;32mNOTE: If you are stilux you can exec this command gmailpolybar to setup email authenticate for polybar"
fi

# Check if install rofi
if [ ! -f /usr/bin/rofi ]; then
	echo "rofi is not installed"
else
	rm -rf ~/.config/rofi/ && cp -r "$configs_dir/rofi/" ~/.config/
fi

# Check if install thunar
if [ ! -f /usr/bin/thunar ]; then
	echo "thunar is not installed"
else
	rm -rf ~/.config/Thunar/ && cp -r "$configs_dir/Thunar/" ~/.config/
fi

# permission for other disk
sudo chown -R sitlux:stilux ~/Data
sudo chmod 755 ~/Data
