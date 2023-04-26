#!/bin/bash
# The scripts is written by TranVoSonTung

# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo ">>> Installing yay..."
	sudo pacman -S --needed git base-devel
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit
	makepkg -si
	cd ..
	rm -rf yay
fi

# Check if install git, if not install it
if ! [ -x "$(command -v git)" ]; then
	echo ">>> Installing git..."
	sudo pacman -S git
fi

# Check if install curl, if not install it
if ! [ -x "$(command -v curl)" ]; then
	echo ">>> Installing curl..."
	sudo pacman -S curl
fi

# Check if install wget, if not install it
if ! [ -x "$(command -v wget)" ]; then
	echo ">>> Installing wget..."
	sudo pacman -S wget
fi

# UI
sudo pacman -S polybar picom rofi xorg-xrandr

sudo pacman -S gnome-keyring

# Manage multiple monitors
sudo pacman -S arandr

# System info
sudo pacman -S --needed neofetch

# g++ compiler
sudo pacman -S --needed gcc

# User directories folder
sudo pacman -S xdg-user-dirs
xdg-user-dirs-update

# Trash manager
sudo pacman -S --needed trash-cli

# Login manager
echo ">>> Installing lightdm, lightdm-webkit2-greeter..."
sudo pacman -S lightdm lightdm-webkit2-greeter

# Check if installed lightdm, enable service
if [ -x "$(command -v lightdm)" ]; then
	sudo systemctl enable lightdm.service
fi

echo ">>> Installing lightdm-webkit2-theme-glorious..."
yay -S lightdm-webkit2-theme-glorious

# Set default lightdm greeter to lightdm-webkit2-greeter
sudo sed -i -e "s/^#greeter-session\s*=\s*\(.*\)/greeter-session=lightdm-webkit2-greeter/g" "/etc/lightdm/lightdm.conf"
# Set default lightdm-webkit2-greeter theme to Glorious
sudo sed -i -e "s/^webkit_theme\s*=\s*\(.*\)/webkit_theme = glorious/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"
sudo sed -i -e "s/^debug_mode\s*=\s*\(.*\)/debug_mode = true/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"
# Ask to reboot
echo ":: WARNING: You should reboot your system to apply changes."

# Lock screen
yay -S betterlockscreen-git
# Check if installed betterlockscreen, enable service
if [ -x "$(command -v betterlockscreen)" ]; then
	sudo systemctl enable "betterlockscreen@$USER"
fi

# Sound
sudo pacman -S alsa-utils alsa-firmware alsa-ucm-conf sof-firmware
sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-media-session pipewire-audio pavucontrol

# Check if installed pipewire, enable service
if [ -x "$(command -v pipewire)" ]; then
	systemctl --user enable pipewire pipewire-pulse
	systemctl --user start pipewire pipewire-pulse
fi

# Bluetooth
sudo pacman -S bluez bluez-utils blueman pipewire-audio pipewire-pulse

# Check if installed bluez, enable service
if [ -x "$(command -v bluez)" ]; then
	sudo systemctl enable bluetooth.service
	sudo systemctl start bluetooth.service
	if [ -f "/etc/bluetooth/main.conf" ]; then
		sudo sed -i -e "s/^#AutoEnable\s*=\s*\(.*\)/AutoEnable=true/g" "/etc/bluetooth/main.conf"
	fi
fi

# Vietnamese input
echo ">>> Installing ibus, ibus-bamboo..."
yay -S ibus ibus-bamboo
# Add ibus to /etc/environment
echo '''
GTK_IM_MODULE=ibus
QT_IM_MODULE=ibus
XMODIFIERS=@im=ibus
''' | sudo tee -a /etc/environment &>/dev/null
echo ":: WARNING: To auto start ibus when login, you should add ibus-daemon -drx to the start point of your desktop environment."

# Notification
echo ">>> Installing dunst..."
sudo pacman -S dunst

# System monitor
echo ">>> Installing gotop..."
yay -S gotop

# Clipboard manager
echo ">>> Installing xclip..."
sudo pacman -S xclip

# Screenshot tools
echo ">>> Installing scrot, flameshot..."
sudo pacman -S scrot flameshot

# Picture viewer
echo ">>> Installing feh..."
sudo pacman -S feh

# Video player
echo ">>> Installing mpv..."
sudo pacman -S mpv

# Disk manager
echo ">>> Installing gparted..."
sudo pacman -S gparted

# NTFS support
echo ">>> Installing ntfs-3g..."
sudo pacman -S ntfs-3g

# Grub manager
echo ">>> Installing grub-customizer..."
sudo pacman -S grub-customizer

# File manager
echo ">>> Installing lf, thunar..."
sudo pacman -S lf thunar imagemagick ffmpegthumbnailer poppler ueberzug chafa
yay -S epub-thumbnailer-git wkhtmltopdf-static
git clone https://github.com/thimc/lfimg.git
sudo cp ./lfimg/lfrun /usr/bin/
rm -rf lfimg

# Text editor
echo ">>> Installing neovim..."
sudo pacman -S --needed neovim fd ripgrep

# Wifi hotspot
echo ">>> Installing linux-wifi-hotspot..."
yay -S linux-wifi-hotspot

# Terminal
sudo pacman -S --needed kitty

# Browser
sudo pacman -S --needed firefox

# Achrive tools
# zip and unzip
echo ">>> Installing zip, unzip..."
sudo pacman -S zip unzip
# tar
sudo pacman -S --needed tar
# rar and unrar
echo ">>> Installing rar..."
yay -S rar

# Office suite
echo ">>> Installing onlyffice..."
yay -S onlyoffice-bin

# Themes manager
sudo pacman -S --needed lxappearance-gtk3

# Themes
# tokonight themes
cd || exit
git clone https://github.com/stronk-dev/Tokyo-Night-Linux.git
sudo cp ./Tokyo-Night-Linux/usr/share/themes/TokyoNight /usr/share/themes/
rm -rf Tokyo-Night-Linux

# Icons Themes
mkdir -p ~/.icons
git clone https://github.com/vinceliuice/WhiteSur-icon-theme.git
cd WhiteSur-icon-theme || exit
./install.sh
cd .. || exit
rm -rf WhiteSur-icon-theme

# Cursor Themes
yay -S catppuccin-cursors-mocha
