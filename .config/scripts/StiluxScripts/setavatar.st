#!/bin/bash
# The scripts is wrote by TranVoSonTung
# The scripts will change the avatar of the lightdm with the theme "lightdm-webkit2-greeter wget"
# The instruction to custom lightdm https://terminalroot.com/customize-lightdm-on-arch-linux/

FLAG="-nopass"
PASS="STTX300191"

# Use eval "$SUDO_COMMAND <Your command>" to exec the command with no password
SUDO_COMMAND="echo \"$PASS\" | sudo -S -k"

USERNAME=$(whoami)
LIGHTDM_EXISTED=$(pacman -Q lightdm)
AVATARSTOREDPATH="/var/lib/AccountsService/icons/$USERNAME"
STOREDDIR=/var/lib/AccountsService/icons
AVATAR=""

# main code
if [ "$LIGHTDM_EXISTED" != "" ]; then
	if [[ ! -d "$STOREDDIR" ]]; then
		if [ "$FLAG" = "$1" ] && [ "$PASS" != "" ]; then
			eval "$SUDO_COMMAND mkdir $STOREDDIR"
		else
			sudo mkdir "$STOREDDIR"
		fi
		clear
		echo "Create $STOREDDIR"
	fi

	# Change avatar
	if [[ "$#" -eq 2 ]]; then
		# Have the flag
		# The flag must be the first parameter
		if [[ "$1" == "$FLAG" ]]; then
			AVATAR=$(readlink -e "$2")
			if [[ -f "$AVATAR" ]]; then
				eval "$SUDO_COMMAND cp $AVATAR $AVATARSTOREDPATH"
				echo -e "\n"
				echo "Change the avatar to $AVATAR"
			else
				echo "The picture is not exist"
			fi
		else
			echo "Syntax error"
			echo "The syntax form: setavatar.st -nopass <picuter-path>"
		fi
	elif [[ "$#" -eq 1 ]]; then
		# No flag
		AVATAR=$(readlink -e "$1")
		if [[ -f "$AVATAR" ]]; then
			sudo cp "$AVATAR" "$AVATARSTOREDPATH"
			echo -e "\n"
			echo "Changed the avatar to $AVATAR"
		else
			echo "The picture is not exist"
		fi
	else
		echo "Syntax error"
		echo "The syntax form: setavatar.st -nopass <picuter-path> or setavatar.st <picture-path>"
	fi
else
	echo "You need to installed lightdm: try pacman -S lightdm lightdm-webkit2-greeter wget"
	read -p -r "Do you want to installed it now: y/n" status
	if [ "$status" = "y" ]; then
		sudo pacman -Syu
		sudo pacman -S lightdm lightdm-webkit2-greeter wget
	fi
fi
