#!/bin/bash
# The scripts is written by TranVoSonTung
CURRENT_PATH=""

# Make sure that the .config folder is exist
mkdir -p ~/.config/

rm -rf ~/.config/background/ && cp -r ~/dotfiles/.config/background/ ~/.config/

# Check iff install betterlockscreen
if [ ! -f /usr/bin/betterlockscreen ]; then
	echo "betterlockscreen is not installed"
else
	rm -rf ~/.config/betterlockscreen/ && cp ~/dotfiles/.config/betterlockscreen/ ~/.config/
fi

# Check if install btop
if [ ! -f /usr/bin/btop ]; then
	echo "btop is not installed"
else
	rm -rf ~/.config/btop/ && cp ~/dotfiles/.config/btop/ ~/.config/
fi

# Check if install calcurse
if [ ! -f /usr/bin/calcurse ]; then
	echo "calcurse is not installed"
else
	rm -rf ~/.config/calcurse/ && cp ~/dotfiles/.config/calcurse/ ~/.config/
fi

# Check if install dunst
if [ ! -f /usr/bin/dunst ]; then
	echo "dunst is not installed"
else
	rm -rf ~/.config/dunst/ && cp ~/dotfiles/.config/dunst/ ~/.config/
fi

# Check if install feh
if [ ! -f /usr/bin/feh ]; then
	echo "feh is not installed"
else
	rm -rf ~/.config/feh/ && cp ~/dotfiles/.config/feh/ ~/.config/
fi

# Check if install i3
if [ ! -f /usr/bin/i3 ]; then
	echo "i3 is not installed"
else
	rm -rf ~/.config/i3/ && cp ~/dotfiles/.config/i3/ ~/.config/
fi

# Check if install kitty
if [ ! -f /usr/bin/kitty ]; then
	echo "kitty terminal is not installed"
else
	rm -rf ~/.config/kitty/ && cp -r ~/dotfiles/.config/kitty/ ~/.config/
fi

# Check if install lf file manager
if [ ! -f /usr/bin/lf ]; then
	echo "lf file manager is not installed"
else
	rm -rf ~/.config/lf/ && cp -r ~/dotfiles/.config/lf/ ~/.config/
fi

# Check if install neofetch
if [ ! -f /usr/bin/neofetch ]; then
	echo "neofetch is not installed"
else
	rm -rf ~/.config/neofetch/ && cp ~/dotfiles/.config/neofetch/ ~/.config/
fi

# Check if install neovim
if [ ! -f /usr/bin/nvim ]; then
	echo "neovim is not installed"
else
	rm -rf ~/.config/nvim/ && cp -r ~/dotfiles/.config/nvim/ ~/.config/
fi

# Check if install picom
if [ ! -f /usr/bin/picom ]; then
	echo "picom is not installed"
else
	rm -rf ~/.config/picom/ && cp ~/dotfiles/.config/picom/ ~/.config/
fi

# Check if install polybar
if [ ! -f /usr/bin/polybar ]; then
	echo "polybar is not installed"
else
	rm -rf ~/.config/polybar/ && cp -r ~/dotfiles/.config/polybar/ ~/.config/
fi

# Check if install rofi
if [ ! -f /usr/bin/rofi ]; then
	echo "rofi is not installed"
else
	rm -rf ~/.config/rofi/ && cp -r ~/dotfiles/.config/rofi/ ~/.config/
fi

# Check if install thunar
if [ ! -f /usr/bin/thunar ]; then
	echo "thunar is not installed"
else
	rm -rf ~/.config/Thunar/ && cp -r ~/dotfiles/.config/Thunar/ ~/.config/
fi
