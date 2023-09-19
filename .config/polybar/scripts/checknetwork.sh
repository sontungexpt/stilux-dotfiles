#!/bin/bash

DISCONNECTED_ICON="󰖪 "
WIRELESS_CONNECTED_ICON=" "
ETHERNET_CONNECTED_ICON=" "

# vnpt || viettel || fpt ||google || archlinux
if (ping -c 1 -q -w 1 203.162.4.191 >/dev/null 2>&1 || ping -c 1 -q -w 1 203.113.131.1 >/dev/null 2>&1 || ping -c 1 -q -w 1 210.245.0.10 >/dev/null 2>&1 || ping -c 1 -q -w 2 google.com >/dev/null 2>&1 || ping -c 1 -q -w 2 archlinux.org >/dev/null 2>&1); then
	if (ip route get 8.8.8.8 | grep -Po 'dev \K\w+' | grep -qFf - /proc/net/wireless >/dev/null 2>&1); then
		WIFI_NAME=$(nmcli -t -f active,ssid dev wifi | awk -F ':' '$1=="yes" {print $2}')
		echo "$WIRELESS_CONNECTED_ICON $WIFI_NAME"
		exit 0
	else
		echo "$ETHERNET_CONNECTED_ICON Ethernet"
		exit 0
	fi
else
	echo "$DISCONNECTED_ICON"
	exit 0
fi
