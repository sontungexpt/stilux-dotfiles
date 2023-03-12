<h1 align="center" style="color:#e5b0ff">-------- Stilux Arch Config --------</h1>

## 1. Information
#### Basic applications
- **Window Manager**: [i3](https://github.com/i3/i3)
- **Status Line**: [polybar](https://github.com/polybar/polybar)
- **Applications Launcher**: [rofi](https://github.com/davatorium/rofi)
- **Code Editor**: [neovim](https://github.com/neovim/neovim), [visual studio code](https://github.com/microsoft/vscode)
- **Browser**: [firefox](https://archlinux.org/packages/?name=firefox)
- **File Manager**: [lf](https://github.com/gokcehan/lf), [thunar](https://github.com/xfce-mirror/thunar)
- **Notification Manager**: [dunst](https://github.com/dunst-project/dunst)
- **Shell**: [zsh](https://archlinux.org/packages/?name=zsh) with [oh-my-zsh theme](https://github.com/ohmyzsh/ohmyzsh)
- **Bluetooth Manager**: [blueman](https://github.com/blueman-project/blueman)
- **Wifi Hotspot**: [linux-wifi-hotspot](https://github.com/lakinduakash/linux-wifi-hotspot)
- **Screenshot**: [flameshot](https://github.com/flameshot-org/flameshot), [scrot](https://github.com/dreamer/scrot)
- **Disk Manager**: [gparted](https://github.com/mgehre/gparted)
- **Grub Manager**: [grub-customizer](https://github.com/mdeguzis/grub-customizer/tree/master)
- **Theme Manager**: [lxappearance-gtk3](https://security.archlinux.org/package/lxappearance-gtk3)
- **Image Viewer**: [feh](https://github.com/derf/feh)
- **Video Player**: [mpv](https://github.com/mpv-player/mpv)
- **Aur, Download Helper**:
[yay](https://github.com/Jguer/yay),
[git](https://git-scm.com/),
[curl](https://github.com/curl/curl),
[wget](https://github.com/jay/wget)
- **Terminal**: [kitty](https://github.com/kovidgoyal/kitty)
- **Icons Theme**: [WhiteSur-icon-theme](https://github.com/vinceliuice/WhiteSur-icon-theme)
- **Main Theme**: [catppuccin-gtk-theme-mocha](https://github.com/catppuccin/gtk)
- **Cursor Theme**: [catpuchin-cursor](https://github.com/catppuccin/cursors)
- **Login Manager**:
[lightdm](https://github.com/canonical/lightdm),
[lightdm-webkit2-greeter](https://github.com/antergos/web-greeter),
[lightdm-webkit2-theme-glorious](https://github.com/manilarome/lightdm-webkit2-theme-glorious)
- **Lockscreen**: [betterlockscreen](https://github.com/betterlockscreen/betterlockscreen)
- **Compositor**: [picom](https://github.com/yshui/picom)
- **Vietnamese Input**: [ibus-bamboo](https://github.com/BambooEngine/ibus-bamboo)
- **System Monitor**: [btop](https://github.com/aristocratos/btop)
- **Volume Control**: [pavucontrol](https://github.com/pulseaudio/pavucontrol)
- **Achrive Manager**
[rar](https://aur.archlinux.org/packages/rar),
[unrar](https://archlinux.org/packages/extra/x86_64/unrar/),
[zip](https://archlinux.org/packages/?name=zip),
[unzip](https://archlinux.org/packages/?name=unzip),
[tar](https://archlinux.org/packages/?name=tar)
- **Trash Manager*: [trash-cli](https://github.com/andreafrancia/trash-cli)
- **Clipboard Manager**: [xclip](https://github.com/astrand/xclip)
- **Ntfs Support**: [ntfs-3g](https://github.com/tuxera/ntfs-3g)

#### Sitlux applications
- **Desired Apps**:
[figma](https://github.com/Figma-Linux/figma-linux),
[gimp](https://gitlab.gnome.org/GNOME/gimp),
[kdenlive](https://github.com/KDE/kdenlive),
[inkscape](https://gitlab.com/inkscape/inkscape)
- **Color Pitcher**: [xcolor](https://github.com/Soft/xcolor)
- **Social Apps**:
[discord](https://archlinux.org/packages/community/x86_64/discord/),
[microsoft teams](https://aur.archlinux.org/packages/teams), zalo-web-app
- **Office Suite**: [only-office](https://github.com/ONLYOFFICE/DesktopEditors)
- **Dev Environment**:
  - [python](https://archlinux.org/packages/?name=python) with [pip](https://archlinux.org/packages/extra/any/python-pip/)
  - [ruby](https://archlinux.org/packages/community/x86_64/ruby/) with [rbenv](https://aur.archlinux.org/packages/rbenv)
  - [flutter](https://docs.flutter.dev/get-started/install/linux)
  - [android studio](https://developer.android.com/studio)
  - [gcc](https://archlinux.org/packages/core/x86_64/gcc/), [cmake](https://archlinux.org/packages/extra/x86_64/cmake/)
  - [nodejs](https://archlinux.org/packages/community/x86_64/nodejs/) with [npm](https://archlinux.org/packages/community/any/npm/)
- **Brownser**:
[brave](https://aur.archlinux.org/packages/brave-bin),
[google-chrome](https://aur.archlinux.org/packages/google-chrome)
- **Calendar Manager**: [calcurse](https://github.com/lfos/calcurse)
- **Dotfiles Manager**: [git bare](https://www.youtube.com/watch?v=tBoLDpTWVOM)
- **Cloud Sync Tools**: [rclone](https://github.com/rclone/rclone)

#### Scripts
- **screenshot**: the scripts to screenshot and copy the picture to clipboard
- **setavatar**: the scripts to change avatar lightdm
- **extract**: the scripts to extract file
- **zsh-history-fix**: the scripts to solve zsh history error
- **showwifipass**: the scripts to show the pass of logged in wifi


## 2. Preview
<image src="./scripts/images/overview-desktop.png" width="100%">


## 3. Install arch linux and i3 wm

## 4. Setup stilux-dotfiles
- You need to install **arch linux** and **i3 window manager** before setup this config
- Open terminal and copy this command
  ```
  git clone https://github.com/sontungexpt/stilux-dotfiles.git && cd stilux-dotfiles && chmod +x setup && ./setup
  ```
- Follow the instructions in the terminal when the scripts is running

## 5. The stilux's key-binding

#### i3 key-bindings
- h, j, k, l for right, down, up, left
- mod + shift + s to print a select area and copy it to clipboard, no save the picture
- printscr to print the full-screen desktop
- shift + printscr to print a select area and save it to Pictures/Screenshots
- crtl + printscr to print a window and save it to Pictures/Screenshots
- mod + shift + f to open flameshot gui
- mod + t to open thunar file manager
- mod + g to open github
- mod + m to open bluetooth manager
- mod + n to open wifi-hotspot
- mod + d to open rofi
- mod + b to open brave
- mod + u to open UIT school web (remove it if you not a student of University of Information Of Technology)
- mod + shift + u to open UIT course (remove it if you not a student of University of Information Of Technology)
