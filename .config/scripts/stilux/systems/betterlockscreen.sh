#!/bin/bash
# The scripts is wrote by TranVoSonTung

# Check if yay is installed
if ! command -v yay &>/dev/null; then
	echo "yay could not be found"
	exit
fi

# If yay installed do
echo "Install betterlockscreen-git"
yay -S betterlockscreen-git

echo "Enable Lockscreen after sleep/suspend"
systemctl enable betterlockscreen@$USER
