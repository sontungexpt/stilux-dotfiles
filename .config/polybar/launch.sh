#!/bin/bash

#!/bin/bash
kill -9 -$(ps -o pgid -p $(cat ~/.config/polybar/scripts/arch/arch_updates.pid) | tail -n1 | sed 's/^[ \t]*//;s/[ \t]*$//')
kill -9 $(cat ~/.config/polybar/scripts/arch/polybar_updates.pid)
# Terminate already running bar instances
killall -q polybar

# Wait until the processes have been shut down
while pgrep -u $UID -x polybar >/dev/null; do sleep 1; done

for i in /sys/class/hwmon/hwmon*/temp*_input; do
  if [ "$(<$(dirname $i)/name): $(cat ${i%_*}_label 2>/dev/null || echo $(basename ${i%_*}))" = "k10temp: Tctl" ]; then
    export HWMON_PATH="$i"
  fi
done

# for m in $(polybar --list-monitors | cut -d":" -f1); do
#     MONITOR=$m polybar --reload now-playing &
# done

for m in $(polybar --list-monitors | cut -d":" -f1); do
  MONITOR=$m polybar --reload mainbar &
done

arch_updates & echo $! > ~/.config/polybar/scripts/arch/arch_updates.pid
echo "Polybar launched..." &
