#!/bin/bash
# The scripts is written by Tran Vo Son Tung

echo '''
#!/bin/sh -e
# Script to dispatch NetworkManager events
#
# Runs shows a login webpage on walled garden networks.
# See NetworkManager(8) for further documentation of the dispatcher events.

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

if [ -x "/usr/bin/logger" ]; then
    logger="/usr/bin/logger -s -t captive-portal"
else
    logger=":"
fi

wait_for_process() {
    PNAME=$1
    while [ -z "$(/usr/bin/pgrep $PNAME)" ]; do
        sleep 3;
    done
}

#launch the browser, but on boot we need to wait that nm-applet starts
start_browser() {
    local user="$1"
    local display="$2"

    export DISPLAY="$display"
    wait_for_process nm-applet

    export XAUTHORITY="/home/$user/.Xauthority"

    $logger "Running browser as '$user' with display '$display' to login in captive portal"
    sudo -u "$user" --preserve-env=DISPLAY,XAUTHORITY -H xdg-open http://capnet.elementary.io 2>&1 > /dev/null
}

# Run the right scripts
case "$2" in
    connectivity-change)
    $logger -p user.debug "dispatcher script triggered on connectivity change: $CONNECTIVITY_STATE"
    if [ "$CONNECTIVITY_STATE" = "PORTAL" ]; then
        # Match last column of who's output with ' :[at least one digit] '
        who | awk '$NF ~ /\(:[0-9]+\)/ { print $1 " " substr($NF, 2, length($NF)-2) };' | \
        while read user display; do
            start_browser $user $display || $logger -p user.err "Failed for user: '$user' display: '$display'"
        done
    fi
    ;;
    *)
    # In a down phase
    exit 0
    ;;
esac
''' | sudo tee -a /etc/NetworkManager/dispatcher.d/90-open_captive_portal &>/dev/null
