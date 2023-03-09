#!/bin/bash
# The scripts is wrote by TranVoSonTung

sudo pacman -S pipewire pipewire-pulse pipewire-alsa pipewire-media-session pipewire-audio pavucontrol

systemctl --user enable pipewire pipewire-pulse

systemctl --user start pipewire pipewire-pulse
