#!/bin/bash
CHOSEN=$(printf "  Power Off\n  Restart\n  Lock\n  Sleep" | rofi -dmenu -i -theme-str)
PASS="STTX300191"
# Use eval "$SUDO_COMMAND <Your command>" to exec the command with no password
SUDO_COMMAND="echo \"$PASS\" | sudo -S -k"

case "$CHOSEN" in
"  Power Off") eval "$SUDO_COMMAND shutdown now" ;;
"  Restart") eval "$SUDO_COMMAND reboot" ;;
"  Lock") betterlockscreen -l dim ;;
"  Sleep") systemctl suspend ;;
*) exit 1 ;;
esac
