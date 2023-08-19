#!/bin/bash

DISCONNECTED_ICON="󰖪 "
WIRELESS_CONNECTED_ICON=" "
ETHERNET_CONNECTED_ICON=" "

ID="$(ip link | awk '/state UP/ {print $2}')"

# vnpt || viettel || fpt ||google || archlinux
if (ping -c 1 -W 1 203.162.4.191 || ping -c 1 -W 1 203.113.131.1 || ping -c 1 -W 1 210.245.0.10 || ping -c 1 -W 2 google.com || ping -c 1 -W 2 archlinux.org) &>/dev/null; then
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
