#!/bin/bash

DISCONNECTED_ICON="󰖪 "
WIRELESS_CONNECTED_ICON=" "
ETHERNET_CONNECTED_ICON=" "

ID="$(ip link | awk '/state UP/ {print $2}')"

if (ping -c 1 archlinux.org || ping -c 1 google.com) &>/dev/null; then
	if [[ $ID == e* ]]; then
		echo "$ETHERNET_CONNECTED_ICON Ethernet"
		exit 0
	else
		WIFI_NAME=$(nmcli -t -f active,ssid dev wifi | awk -F ':' '$1=="yes" {print $2}')
		echo "$WIRELESS_CONNECTED_ICON $WIFI_NAME"
		exit 0
	fi
else
	echo "$DISCONNECTED_ICON"
	exit 0
fi
