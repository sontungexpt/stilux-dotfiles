#!/bin/bash
# The scripts is written by TranVoSonTung

YAY="yay -S --answerclean All --noconfirm --needed"
PACMAN="sudo pacman -S --noconfirm --needed"


# Check if installed yay, if not install it
if ! [ -x "$(command -v yay)" ]; then
	echo ">>> Installing yay..."
	eval "$PACMAN git base-devel"
	git clone https://aur.archlinux.org/yay.git
	cd yay || exit 1
	makepkg -si
	cd ..
	rm -rf yay
fi

# Check if install git, if not install it
if ! [ -x "$(command -v git)" ]; then
	echo ">>> Installing git..."
	eval "$PACMAN git"
fi

# Check if install curl, if not install it
if ! [ -x "$(command -v curl)" ]; then
	echo ">>> Installing curl..."
	eval "$PACMAN curl"
fi

# Check if install wget, if not install it
if ! [ -x "$(command -v wget)" ]; then
	echo ">>> Installing wget..."
	eval "$PACMAN wget"
fi

# add color to pacman
sudo sed -i -e "s/^#Color/Color/g" "/etc/pacman.conf"

# backlight
eval "$PACMAN light"

# UI
eval "$PACMAN polybar picom rofi xorg-xrandr xcolor"

eval "$PACMAN gnome-keyring"

# Manage multiple monitors
eval "$PACMAN arandr"

# System info
eval "$PACMAN neofetch"

# g++ compiler
eval "$PACMAN gcc"

# User directories folder
eval "$PACMAN xdg-user-dirs"
xdg-user-dirs-update

# Trash manager
eval "$PACMAN trash-cli"

# Login manager
echo ">>> Installing lightdm, lightdm-webkit2-greeter..."
eval "$PACMAN lightdm lightdm-webkit2-greeter"

# Check if installed lightdm, enable service
if [ -x "$(command -v lightdm)" ]; then
	sudo systemctl enable lightdm.service
fi

echo ">>> Installing lightdm-webkit2-theme-glorious..."
eval "$YAY lightdm-webkit2-theme-glorious"

# Set default lightdm greeter to lightdm-webkit2-greeter
sudo sed -i -e "s/^#greeter-session\s*=\s*\(.*\)/greeter-session=lightdm-webkit2-greeter/g" "/etc/lightdm/lightdm.conf"
# Set default lightdm-webkit2-greeter theme to Glorious
sudo sed -i -e "s/^webkit_theme\s*=\s*\(.*\)/webkit_theme = glorious/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"
sudo sed -i -e "s/^debug_mode\s*=\s*\(.*\)/debug_mode = true/g" "/etc/lightdm/lightdm-webkit2-greeter.conf"
# Ask to reboot
echo ":: WARNING: You should reboot your system to apply changes."

# Lock screen
eval "$YAY betterlockscreen"
# Check if installed betterlockscreen, enable service
if [ -x "$(command -v betterlockscreen)" ]; then
	sudo systemctl enable "betterlockscreen@$USER"
fi

# Sound
eval "$PACMAN alsa-utils alsa-firmware alsa-ucm-conf sof-firmware"
eval "$PACMAN pipewire pipewire-pulse pipewire-alsa pipewire-media-session pipewire-audio pavucontrol"

# Check if installed pipewire, enable service
if [ -x "$(command -v pipewire)" ]; then
	systemctl --user enable pipewire pipewire-pulse
	systemctl --user start pipewire pipewire-pulse
fi

# Bluetooth
eval "$PACMAN bluez bluez-utils blueman pipewire-audio pipewire-pulse"

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
eval "$YAY ibus ibus-bamboo"
# Add ibus to /etc/environment
echo '''
GTK_IM_MODULE=ibus
QT_IM_MODULE=ibus
XMODIFIERS=@im=ibus
''' | sudo tee -a /etc/environment &>/dev/null
echo ":: WARNING: To auto start ibus when login, you should add ibus-daemon -drx to the start point of your desktop environment."

# Notification
echo ">>> Installing dunst..."
eval "$PACMAN dunst"

# System monitor
echo ">>> Installing gotop..."
eval "$YAY gotop"

# Clipboard manager
echo ">>> Installing xclip..."
eval "$PACMAN xclip"

# Screenshot tools
echo ">>> Installing scrot, flameshot..."
eval "$PACMAN scrot flameshot"

# Picture viewer
echo ">>> Installing feh..."
eval "$PACMAN feh"

# Video player
echo ">>> Installing mpv..."
eval "$PACMAN mpv"

# Disk manager
echo ">>> Installing gparted..."
eval "$PACMAN gparted"

# NTFS support
echo ">>> Installing ntfs-3g..."
eval "$PACMAN ntfs-3g"

# Grub manager
echo ">>> Installing grub-customizer..."
eval "$PACMAN grub-customizer"

# File manager
echo ">>> Installing lf, thunar..."
eval "$PACMAN lf thunar imagemagick ffmpegthumbnailer poppler chafa"
eval "$YAY epub-thumbnailer-git wkhtmltopdf-static ueberzugpp"
git clone https://github.com/thimc/lfimg.git
sudo cp ./lfimg/lfrun /usr/bin/
rm -rf lfimg

# Text editor
echo ">>> Installing neovim..."
eval "$PACMAN neovim fd ripgrep"

# Wifi hotspot
echo ">>> Installing linux-wifi-hotspot..."
eval "$YAY linux-wifi-hotspot"

# Terminal
eval "$PACMAN kitty"

# Browser
eval "$PACMAN firefox"

# Achrive tools
# zip and unzip
echo ">>> Installing zip, unzip..."
eval "$PACMAN zip unzip"
# tar
eval "$PACMAN tar"
# rar and unrar
echo ">>> Installing rar..."
eval "$YAY rar"

# Office suite
echo ">>> Installing onlyffice..."
eval "$YAY onlyoffice-bin"

# Themes manager
eval "$PACMAN lxappearance-gtk3"

# Themes
# tokonight themes
cd || exit 1
git clone https://github.com/stronk-dev/Tokyo-Night-Linux.git && sudo cp -r ./Tokyo-Night-Linux/usr/share/themes/TokyoNight /usr/share/themes/ && rm -rf Tokyo-Night-Linux

# Icons Themes
mkdir -p ~/.icons
git clone https://github.com/vinceliuice/WhiteSur-icon-theme.git && ./WhiteSur-icon-theme/install.sh && rm -rf WhiteSur-icon-theme

# Cursor Themes
# eval "$YAY catppuccin-cursors-mocha"