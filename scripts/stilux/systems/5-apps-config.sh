#!/bin/bash
# The scripts is written by TranVoSonTung

curr_file_path="$(readlink -f "$0")"
systems_dir="$(dirname "$curr_file_path")"
stilux_dir="$(dirname "$systems_dir")"
scripts_dir="$(dirname "$stilux_dir")"
dotfiles_dir="$(dirname "$scripts_dir")"
configs_dir="$dotfiles_dir/.config"

# Make sure that the .config folder is exist
mkdir -p ~/.config/

# Copy the .bashrc file
rm -rf ~/.bashrc && cp "$dotfiles_dir/.bashrc" ~/

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

if [ -d ~/.config/background ]; then
	rm -rf ~/.config/background
fi
cp -r "$configs_dir/background/" ~/.config/

# Check if install betterlockscreen
if [ ! -f /usr/bin/betterlockscreen ]; then
	echo "betterlockscreen is not installed"
else
	if [ -d ~/.config/betterlockscreen ]; then
		rm -rf ~/.config/betterlockscreen
	fi
	cp -r "$configs_dir/betterlockscreen/" ~/.config/
fi

# Check if install calcurse
if [ ! -f /usr/bin/calcurse ]; then
	echo "calcurse is not installed"
else
	if [ -d ~/.config/calcurse ]; then
		rm -rf ~/.config/calcurse
	fi
	cp -r "$configs_dir/calcurse/" ~/.config/
fi

# Check if install dunst
if [ ! -f /usr/bin/dunst ]; then
	echo "dunst is not installed"
else
	if [ -d ~/.config/dunst ]; then
		rm -rf ~/.config/dunst
	fi
	cp -r "$configs_dir/dunst/" ~/.config/
fi

# Check if install feh
if [ ! -f /usr/bin/feh ]; then
	echo "feh is not installed"
else
	if [ -d ~/.config/feh ]; then
		rm -rf ~/.config/feh
	fi
	cp -r "$configs_dir/feh/" ~/.config/
fi

# Check if install i3
if [ ! -f /usr/bin/i3 ]; then
	echo "i3 is not installed"
else
	if [ -d ~/.config/i3 ]; then
		rm -rf ~/.config/i3
	fi
	cp -r "$configs_dir/i3/" ~/.config/
fi

# Check if install kitty
if [ ! -f /usr/bin/kitty ]; then
	echo "kitty terminal is not installed"
else
	if [ -d ~/.config/kitty ]; then
		rm -rf ~/.config/kitty
	fi
	cp -r "$configs_dir/kitty/" ~/.config/
fi

if [ ! -f /usr/bin/alacritty ]; then
	echo "alacritty terminal is not installed"
else
	if [ -d ~/.config/alacritty ]; then
		rm -rf ~/.config/alacritty
	fi
	cp -r "$configs_dir/alacritty/" ~/.config/
fi

# Check if install lf file manager
if [ ! -f /usr/bin/lf ]; then
	echo "lf file manager is not installed"
else
	if [ -d ~/.config/lf ]; then
		rm -rf ~/.config/lf
	fi
	cp -r "$configs_dir/lf/" ~/.config/
fi

# Check if install neofetch
if [ ! -f /usr/bin/neofetch ]; then
	echo "neofetch is not installed"
else
	if [ -d ~/.config/neofetch ]; then
		rm -rf ~/.config/neofetch
	fi
	cp -r "$configs_dir/neofetch/" ~/.config/
fi

# Check if install neovim
if [ ! -f /usr/bin/nvim ]; then
	echo "neovim is not installed"
else
	if [ -d ~/.config/nvim ]; then
		rm -rf ~/.config/nvim
	fi
	[ -d ~/.config/nvim ] && mv ~/.config/nvim ~/.config/nvim.bak
	git clone https://github.com/sontungexpt/neovim-config.git ~/.config/nvim
fi

# Check if install picom
if [ ! -f /usr/bin/picom ]; then
	echo "picom is not installed"
else
	if [ -d ~/.config/picom ]; then
		rm -rf ~/.config/picom
	fi
	cp -r "$configs_dir/picom/" ~/.config/
fi

# Check if install polybar
if [ ! -f /usr/bin/polybar ]; then
	echo "polybar is not installed"
else
	if [ -d ~/.config/polybar ]; then
		rm -rf ~/.config/polybar
	fi
	cp -r "$configs_dir/polybar/" ~/.config/
fi

# Check if install rofi
if [ ! -f /usr/bin/rofi ]; then
	echo "rofi is not installed"
else
	if [ -d ~/.config/rofi ]; then
		rm -rf ~/.config/rofi
	fi
	cp -r "$configs_dir/rofi/" ~/.config/
fi

# Check if install thunar
if [ ! -f /usr/bin/thunar ]; then
	echo "thunar is not installed"
else
	if [ -d ~/.config/Thunar ]; then
		rm -rf ~/.config/Thunar
	fi
	cp -r "$configs_dir/Thunar/" ~/.config/
fi

if [ -d ~/.config/menus ]; then
	rm -rf ~/.config/menus
fi
cp -r "$configs_dir/menus/" ~/.config/

# permission for other disk
# sudo chown -R stilux ~/Data
# sudo chmod 755 ~/Data
