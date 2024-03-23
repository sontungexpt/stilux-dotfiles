#!/bin/bash
# The scripts is written by TranVoSonTung

# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo ">>> Installing yay..."
	sudo pacman -S --needed git base-devel --noconfirm
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit 1
	makepkg -si
	cd ..
	rm -rf yay
fi

# Check if install git, if not install it
if ! [ -x "$(command -v git)" ]; then
	echo ">>> Installing git..."
	sudo pacman -S git --noconfirm --needed
fi

# Check if install curl, if not install it
if ! [ -x "$(command -v curl)" ]; then
	echo ">>> Installing curl..."
	sudo pacman -S curl --noconfirm --needed
fi

# Check if install wget, if not install it
if ! [ -x "$(command -v wget)" ]; then
	echo ">>> Installing wget..."
	sudo pacman -S wget --noconfirm --needed
fi

# add color to pacman
sudo sed -i -e "s/^#Color/Color/g" "/etc/pacman.conf"

# backlight
sudo pacman -S light --noconfirm --needed

# # Lock screen
# yay -S betterlockscreen
# # Check if installed betterlockscreen, enable service
# if [ -x "$(command -v betterlockscreen)" ]; then
# 	sudo systemctl enable "betterlockscreen@$USER"
# fi
sudo pacman -S i3lock imagemagick --noconfirm --needed

# UI
sudo pacman -S polybar picom rofi xorg-xrandr xcolor --noconfirm --needed

sudo pacman -S gnome-keyring --noconfirm --needed

# Manage multiple monitors
sudo pacman -S arandr --noconfirm --needed

# System info
sudo pacman -S --needed neofetch --noconfirm

# g++ compiler
sudo pacman -S --needed gcc --noconfirm

# User directories folder
sudo pacman -S xdg-user-dirs --noconfirm --needed
xdg-user-dirs-update

# Trash manager
sudo pacman -S --needed trash-cli --noconfirm

# Login manager
echo ">>> Installing lightdm, lightdm-webkit2-greeter..."
sudo pacman -S lightdm lightdm-webkit2-greeter --noconfirm --needed

# Check if installed lightdm, enable service
if [ -x "$(command -v lightdm)" ]; then
	sudo systemctl enable lightdm.service
fi

echo ">>> Installing lightdm-webkit2-theme-glorious..."
yay -S lightdm-webkit2-theme-glorious --answerclean All --noconfirm --needed

# Set default lightdm greeter to lightdm-webkit2-greeter
sudo sed -i -e "s/^#greeter-session\s*=\s*\(.*\)/greeter-session=lightdm-webkit2-greeter/g" "/etc/lightdm/lightdm.conf"
# Set default lightdm-webkit2-greeter theme to Glorious
sudo sed -i -e "s/^webkit_theme\s*=\s*\(.*\)/webkit_theme = glorious/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"
sudo sed -i -e "s/^debug_mode\s*=\s*\(.*\)/debug_mode = true/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"
# Ask to reboot
echo ":: WARNING: You should reboot your system to apply changes."

# Sound
sudo pacman -S alsa-utils alsa-firmware alsa-ucm-conf sof-firmware --noconfirm --needed
sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-media-session pipewire-audio pavucontrol --noconfirm --needed

# Check if installed pipewire, enable service
if [ -x "$(command -v pipewire)" ]; then
	systemctl --user enable pipewire pipewire-pulse
	systemctl --user start pipewire pipewire-pulse
fi

# Bluetooth
sudo pacman -S bluez bluez-utils blueman pipewire-audio pipewire-pulse --noconfirm --needed

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
yay -S ibus ibus-bamboo --answerclean All --noconfirm --needed
# Add ibus to /etc/environment
echo '''
GTK_IM_MODULE=ibus
QT_IM_MODULE=ibus
XMODIFIERS=@im=ibus
''' | sudo tee -a /etc/environment &>/dev/null
echo ":: WARNING: To auto start ibus when login, you should add ibus-daemon -drx to the start point of your desktop environment."

# Notification
echo ">>> Installing dunst..."
sudo pacman -S dunst --noconfirm --needed

# System monitor
echo ">>> Installing gotop..."
yay -S gotop --answerclean All --noconfirm --needed

# Clipboard manager
echo ">>> Installing xclip..."
sudo pacman -S xclip --noconfirm --needed

# Screenshot tools
echo ">>> Installing scrot, flameshot..."
sudo pacman -S scrot flameshot --noconfirm --needed

# Picture viewer
echo ">>> Installing feh..."
sudo pacman -S feh --noconfirm --needed

# Video player
echo ">>> Installing mpv..."
sudo pacman -S mpv --noconfirm --needed

# Disk manager
echo ">>> Installing gparted..."
sudo pacman -S gparted --noconfirm --needed

# NTFS support
echo ">>> Installing ntfs-3g..."
sudo pacman -S ntfs-3g --noconfirm --needed

# Grub manager
echo ">>> Installing grub-customizer..."
sudo pacman -S grub-customizer --noconfirm --needed

# File manager
echo ">>> Installing lf, thunar..."
sudo pacman -S lf thunar imagemagick ffmpegthumbnailer poppler chafa --noconfirm --needed
yay -S epub-thumbnailer-git wkhtmltopdf-static ueberzugpp --answerclean All --noconfirm --needed
git clone https://github.com/thimc/lfimg.git
sudo cp ./lfimg/lfrun /usr/bin/
rm -rf lfimg

# Text editor
echo ">>> Installing neovim..."
sudo pacman -S --needed neovim fd ripgrep --noconfirm

# Wifi hotspot
echo ">>> Installing linux-wifi-hotspot..."
yay -S linux-wifi-hotspot --answerclean All --noconfirm --needed

# Terminal
sudo pacman -S --needed kitty --noconfirm

# Browser
sudo pacman -S --needed firefox --noconfirm

# Achrive tools
# zip and unzip
echo ">>> Installing zip, unzip..."
sudo pacman -S zip unzip --noconfirm --needed
# tar
sudo pacman -S --needed tar --noconfirm
# rar and unrar
echo ">>> Installing rar..."
yay -S rar --answerclean All --noconfirm --needed

# Office suite
echo ">>> Installing onlyffice..."
yay -S onlyoffice-bin --answerclean All --noconfirm --needed

# Themes manager
sudo pacman -S --needed lxappearance-gtk3 --noconfirm

# Themes
# tokonight themes
cd || exit 1
git clone https://github.com/stronk-dev/Tokyo-Night-Linux.git && sudo cp -r ./Tokyo-Night-Linux/usr/share/themes/TokyoNight /usr/share/themes/ && rm -rf Tokyo-Night-Linux

# Icons Themes
mkdir -p ~/.icons
git clone https://github.com/vinceliuice/WhiteSur-icon-theme.git && ./WhiteSur-icon-theme/install.sh && rm -rf WhiteSur-icon-theme

# Cursor Themes
# yay -S catppuccin-cursors-mocha
