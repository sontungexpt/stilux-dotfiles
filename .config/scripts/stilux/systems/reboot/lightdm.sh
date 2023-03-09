#!/bin/bash
# The scripts is wrote by TranVoSonTung

sudo pacman -S lightdm lightdm-webkit2-greeter

sudo systemctl enable lightdm.service

yay -Syu lightdm-webkit2-theme-glorious

# Download theme with wget uncomment the following lines
# -----Download with wget
#
# sudo pacman -S wget
# wget git.io/webkit2 -O theme.tar.gz
# mkdir glorious
# mv theme.tar.gz glorious/
# cd glorious
# tar zxvf theme.tar.gz
# rm theme.tar.gz
# cd ..
# sudo mv glorious/ /usr/share/lightdm-webkit/themes/
#
# -----Download with wget

# Change theme
lightdm_conf="/etc/lightdm/lightdm.conf"
lightdm_webkit2_greeter_conf="/etc/lightdm/lightdm-webkit2-greeter.conf"

lightdm_theme="lightdm-webkit2-greeter"
webkit_theme="glorious"
debug_mode="true"

# Set default lightdm greeter to lightdm-webkit2-greeter
sudo sed -i -e "s/^#greeter-session\s*=\s*\(.*\)/greeter-session=$lightdm_theme/g" "$lightdm_conf"

# Set default lightdm-webkit2-greeter theme to Glorious
sudo sed -i -e "s/^webkit_theme\s*=\s*\(.*\)/webkit_theme = $webkit_theme/g" "$lightdm_webkit2_greeter_conf"
sudo sed -i -e "s/^debug_mode\s*=\s*\(.*\)/debug_mode = $debug_mode/g" "$lightdm_webkit2_greeter_conf"

# Ask to reboot
echo "You should reboot your system to apply changes."

# If you want to reboot automatically, uncomment the following lines
# read -p "Do you want to reboot now? [y/n] " -n 1 -r
# echo
# if [[ $REPLY =~ ^[Yy]$ ]]; then
# 	sudo reboot
# fi
