#!/bin/bash
# The scripts is wrote by TranVoSonTung

sudo pacman -S bluez bluez-utils blueman pipewire-audio pipewire-pulse

systemctl enable bluetooth.service
systemctl start bluetooth.service
