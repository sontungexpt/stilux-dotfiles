#!/bin/sh

# Get the current input method
current_engine=$(ibus engine)

toggle() {
	if [ "$current_engine" = "xkb:us::eng" ]; then
		ibus engine Bamboo && exit 0
	elif [ "$current_engine" = "Bamboo" ]; then
		ibus engine xkb:us::eng && exit 0
	else
		echo "Unknown engine" && exit 1
	fi
}

show_engine() {
	if [ "$current_engine" = "xkb:us::eng" ]; then
		echo "EN" && exit 0
	elif [ "$current_engine" = "Bamboo" ]; then
		echo "VI" && exit 0
	else
		echo "Unknown engine" && exit 1
	fi
}

case "$1" in
--toggle | -t | toggle)
	toggle
	;;
*)
	show_engine
	;;
esac
