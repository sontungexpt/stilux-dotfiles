#!/bin/bash
# The scripts is written by TranVoSonTung

# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo "Installing yay..."
	sudo pacman -S --needed git base-devel
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit
	makepkg -si
	cd ..
	rm -rf yay
fi

# Check if install git, if not install it
if ! [ -x "$(command -v git)" ]; then
	sudo pacman -S --needed git
fi

# UI
sudo pacman -S polybar picom rofi xorg-xrandr

# System info
sudo pacman -S --needed neofetch

# User directories folder
sudo pacman -S xdg-user-dirs
xdg-user-dirs-update

# Trash manager
sudo pacman -S --needed trash-cli

# Login manager
echo "Installing lightdm, lightdm-webkit2-greeter..."
sudo pacman -S lightdm lightdm-webkit2-greeter
sudo systemctl enable lightdm.service

echo "Installing lightdm-webkit2-theme-glorious..."
yay -S lightdm-webkit2-theme-glorious

# Set default lightdm greeter to lightdm-webkit2-greeter
sudo sed -i -e "s/^#greeter-session\s*=\s*\(.*\)/greeter-session=lightdm-webkit2-greeter/g" "/etc/lightdm/lightdm.conf"
# Set default lightdm-webkit2-greeter theme to Glorious
sudo sed -i -e "s/^webkit_theme\s*=\s*\(.*\)/webkit_theme = glorious/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"
sudo sed -i -e "s/^debug_mode\s*=\s*\(.*\)/debug_mode = true/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"

# Ask to reboot
echo "You should reboot your system to apply changes."

# Lock screen
yay -S betterlockscreen-git
sudo systemctl enable betterlockscreen@"$USER"
# sudo systemctl enable betterlockscreen@$USER

# Sound
sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-media-session pipewire-audio pavucontrol

sudo systemctl enable pipewire pipewire-pulse
sudo systemctl start pipewire pipewire-pulse

# Bluetooth
sudo pacman -S bluez bluez-utils blueman pipewire-audio pipewire-pulse

sudo systemctl enable bluetooth.service
sudo systemctl start bluetooth.service

# Vietnamese input
echo "Installing ibus, ibus-bamboo..."
yay -S ibus ibus-bamboo

# Notification
echo "Installing dunst..."
sudo pacman -S dunst

# System monitor
echo "Installing btop..."
sudo pacman -S btop

# Clipboard manager
echo "Installing xclip..."
sudo pacman -S xclip

# Screenshot tools
echo "Installing scrot, flameshot..."
sudo pacman -S scrot flameshot

# Picture viewer
echo "Installing feh..."
sudo pacman -S feh

# Video player
echo "Installing mpv..."
sudo pacman -S mpv

# Disk manager
echo "Installing gparted..."
sudo pacman -S gparted

# Grub manager
echo "Installing grub-customizer..."
sudo pacman -S grub-customizer

# File manager
echo "Installing lf, thunar..."
sudo pacman -S lf thunar imagemagick ffmpegthumbnailer poppler ueberzug
yay -S epub-thumbnailer-git wkhtmltopdf-static

# Text editor
echo "Installing neovim..."
sudo pacman -S --needed neovim

# Wifi hotspot
echo "Installing linux-wifi-hotspot..."
yay -S linux-wifi-hotspot

# Terminal
sudo pacman -S --needed kitty

# Browser
sudo pacman -S --needed firefox

# Achrive tools
# zip and unzip
echo "Installing zip, unzip..."
sudo pacman -S zip unzip
# tar
sudo pacman -S --needed tar
# rar and unrar
echo "Installing rar, unrar..."
yay -S rar unrar

# Office suite
echo "Installing onlyffice..."
yay -S onlyoffice-bin

# Cloud sync tools
sudo pacman -S rclone

# Themes manager
sudo pacman -S lxappearance-gtk3

# Themes
yay -S catppuccin-gtk-theme-mocha

# Icons Themes
mkdir -p ~/.icons
git clone https://github.com/vinceliuice/WhiteSur-icon-theme.git
cd WhiteSur-icon-theme || exit
./install.sh
cd ..

# Cursor Themes
yay -S catppuccin-cursors-mocha
