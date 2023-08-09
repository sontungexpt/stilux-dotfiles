chosen=$(printf "  Power Off\n  Restart\n  Lock\n  Sleep" | rofi -dmenu -i -theme-str)

case "$chosen" in
  "  Power Off") terminator shutdown now ;;
  "  Restart") terminator reboot ;;
  "  Lock") terminator betterlockscreen -l dim ;;
  "  Sleep") terminator suspend ;;
  *) exit 1 ;;
esac
