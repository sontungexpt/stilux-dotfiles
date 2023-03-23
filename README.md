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
  - [lightdm](https://github.com/canonical/lightdm)
  - [lightdm-webkit2-greeter](https://github.com/antergos/web-greeter)
  - [lightdm-webkit2-theme-glorious](https://github.com/manilarome/lightdm-webkit2-theme-glorious)
- **Lockscreen**: [betterlockscreen](https://github.com/betterlockscreen/betterlockscreen)
- **Compositor**: [picom](https://github.com/yshui/picom)
- **Vietnamese Input**: [ibus-bamboo](https://github.com/BambooEngine/ibus-bamboo)
- **System Monitor**: [btop](https://github.com/aristocratos/btop)
- **Volume Control**: [pavucontrol](https://github.com/pulseaudio/pavucontrol)
- **Achrive Manager**
  - [rar](https://aur.archlinux.org/packages/rar), [unrar](https://archlinux.org/packages/extra/x86_64/unrar/)
  - [zip](https://archlinux.org/packages/?name=zip), [unzip](https://archlinux.org/packages/?name=unzip)
  - [tar](https://archlinux.org/packages/?name=tar)
- **Trash Manager**: [trash-cli](https://github.com/andreafrancia/trash-cli)
- **Clipboard Manager**: [xclip](https://github.com/astrand/xclip)
- **Ntfs Support**: [ntfs-3g](https://github.com/tuxera/ntfs-3g)
- **System Information Tool**: [neofetch](https://github.com/dylanaraps/neofetch)
- **Multi monitors tools**: [arandr](https://archlinux.org/packages/?name=arandr)

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
- **extract**: the scripts to unachrive file
- **zsh-history-fix**: the scripts to solve zsh history error
- **showwifipass**: the scripts to show the pass of logged in wifi
- **setwallpaper**: the scripts to set wallpaper of i3 wm
- **add-lightdm-background**: the scripts to auto add background to the storage background of lightdm
- **cleanarch**: the scripts to clean your arch linux


## 2. Preview
<image src="./scripts/images/overview-desktop.png" width="100%"/>
<image src="./scripts/images/preview-0.png" width="100%"/>


## 3. Install arch linux and i3 wm

#### Install arch ( you can follow the instruction below or this [video](https://www.youtube.com/watch?v=JRdYSGh-g3s) to dual boot with window)

<details><summary>Install arch</summary><blockquote>

- **Step 1: Setup Time**
```
timedatectl set-ntp true
```

- **Step 2: Check UEFI**
```
ls /sys/firmware/efi
```

- **Step 3: Check internet connection**
```
ping google.com
```

- **Step 3.5: Connect to Wi-Fi (Skip if you already success in step 3)**
```
iwctl
device list
```
Choose one device from the list example: wlan0
```
station wlan0 get-networks
station wlan0 connect "Wi-fi Name"
exit
```

- **Step 4: Sort Package Download Server**
```
pacman -Sy reflector
```
```
reflector -c [Region] -c [Region-Close] -c [Region-Close] -c [Region-Close] -a 12 --sort rate --save /etc/pacman.d/mirrorlist
```
If you are Vietnamese use this
```
reflector -c Vietnam -c Singapore -c Japan -c India -a 12 --sort rate --save /etc/pacman.d/mirrorlist
```
NOTE: There are usually error on this step, but you can totally ignore it and be fine!

Check mirror list that reflector generate
```
cat /etc/pacman.d/mirrorlist
```

- **Step 5: Disk Checking**
```
lsblk
```

- **Step 6: Disk Partition (Read it all before do)**
```
cfdisk /dev/sda
```
NOTE: Sometimes it will be nvme0n1 instead of sda!

A disk usually has more than 50GB to work properly (You should take a picture)

Example:
> (Always) 500M for (EFI System). (Eg: /dev/sda1 or /dev/nvme0n1p1)

> (Example) 1GB for (Linux swap) (If less RAM add more Swap) (eg: /dev/sda2 or /dev/nvme0n1p2)

> (Should) 30GB (or more) for root (Linux Filesystem) (eg: /dev/sda3 or /dev/nvme0n1p3)

> (Always) The rest for home (Linux Filesystem) (eg: /dev/sda3 or /dev/nvme0n1p4)

Disk partition with cfdisk: (replace sda with nvme like the above)
1. Choose (gpt) if asked
2. At Free Space choose [NEW]
3. Enter disk space (eg: 500M,30GB,.....)
4. At dev/sda1 choose [TYPE] and choose partition type like above
5. Repeat with all the other partition
6. Choose [WRITE] to save it all

Swap Rule:
1. RAM ⩽ 2GB: Double the RAM (eg: 2GB RAM then 4GB Swap)
2. 2 GB – 8 GB: Equal the RAM (eg: 3GB RAM then 3GB Swap)
3. 8 GB: Minimum 4GB for Swap (add more as you like)

- **Step 7: Disk formatting**

1. **New arch linux only do this**
```
mkfs.fat -F32 /dev/sda1

mkswap /dev/sda2
swapon /dev/sda2

mkfs.ext4 /dev/sda3

mkfs.ext4 /dev/sda4
```

2. **If you dual boot with Window do this**

For swap partition do this
```
mkswap /dev/sda2
swapon /dev/sda2
```

For root partition do this (it will format partition)
```
mkfs.ext4 /dev/sda3
```

For home partition do this (it will format partition)
```
mkfs.ext4 /dev/sda4
```

NOTE: Replace with nvme if you have nvme instead of sda as the above

- **Step 8: Mount Partitions**

NOTE: Replace with nvme if you have nvme instead of sda as the above
1. **New arch linux only do this**
```
mount /dev/sda3 /mnt

mkdir /mnt/boot
mount /dev/sda1 /mnt/boot

mkdir /mnt/home
mount /dev/sda4 /mnt/home
```

2. **If you dual boot with Window do this**
```
mount /dev/sda3 /mnt

mkdir /mnt/boot
mount /dev/sda1 /mnt/boot

mkdir /mnt/home
mount /dev/sda4 /mnt/home
```

- **Step 9: Install base packages**
```
pacstrap /mnt base base-devel linux linux-firmware linux-headers intel-ucode sudo git neofetch networkmanager network-manager-applet dhcpcd neovim
```

- **Step 10: Basic setup**
```
genfstab -U /mnt >> /mnt/etc/fstab
```

```
arch-chroot /mnt
```

NOTE: For this step replace [timezone] with region example Australia/Sydney
```
ln -sf /usr/share/zoneinfo/[timezone]/[timezone] /etc/localtime
```

If you are Vietnamese do this
```
ln -sf /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime
```

```
hwclock --systohc
```

```
nvim /etc/locale.gen

After that uncomment: en_US.UTF-8 UTF-8
```

For those who don't know how to use neovim:
1. Press [i] to enter vim edit mode
2. At line #  en_US.UTF-8 UTF-8 remove # and the additional spaces then press [ESC]
3. Enter the following keys [:] [w] [q] then [ENTER]


```
locale-gen
```

```
echo LANG=en_US.UTF-8 > /etc/locale.conf
```

NOTE: From the following step replace stilux-pc with your pc name (note names should be short and not contain special characters use - for spaces eg: dummy-pc)

```
echo stilux-pc > /etc/hostname
```

```
nvim /etc/hosts
```

Add the following line: (do like above to edit vim) (press [TAB] at [TAB])

```
127.0.0.1[TAB]localhost
::1[TAB]localhost
127.0.1.1[TAB]stilux-pc.localdomain[TAB]dummy-pc
```
(Exit and save like above)


Create password for root (Admin)
```
passwd
```
Enter the password blindly, they will not show up

- **Step 11: Add User**
Replace stilux with your preferred username
```
useradd -m stilux
passwd stilux
```
Enter the password blindly, like above

```
usermod -aG wheel,audio,video,optical,storage,power stilux
```

```
EDITOR=nvim visudo
```

(use neovim like above)
```
Add: stilux ALL=(ALL) ALL
Uncomment: %wheel ALL=(ALL) ALL
Add Defaults timestamp_timeout=0
```
(Save and exit like above)

- **Step 12: Create Grub Boot**

Check if sda1 is mount if not mount again
```
lsblk
```

```
pacman -S grub efibootmgr dosfstools mtools
```

```
nvim /etc/default/grub
```
Uncomment GRUB_DISABLE_OS_PROBER=false
Save and exit like above

```
pacman -S os-prober
```

```
systemctl enable dhcpcd.service
systemctl enable NetworkManager.service
```

```
grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB --recheck
```

```
grub-mkconfig -o /boot/grub/grub.cfg
```

- **Step 13: Exit, Reboot, Update**
```
exit
umount -lR /mnt
reboot
```

How to login:
1. Enter the username at first
2. Enter the password blindly then [ENTER]

Update the system:
```
sudo pacman -Syu
```
NOTE: Should do once everyday

Enter root password (admin)

Reconnect to Wi-Fi
```
nmtui
```

Restart System
```
reboot
```

Turn off the system
```
poweroff
```

</blockquote></details>

#### Install i3 window manager ( you can follow the instruction below or this [video](https://www.youtube.com/watch?v=sE3LHJ8lEss) to install i3 )

<details><summary>Install i3</summary><blockquote>

```
sudo pacman -S xorg xorg-xinit i3-wm i3lock i3blocks dmenu kitty
```

```
sudo cp /etc/X11/xinit/xinitrc ~/.xinitrc
```

```
echo -e "\n# I3 window manager" >>"$HOME/.xinitrc"
```

```
echo "exec i3" >>"$HOME/.xinitrc"
```


</blockquote></details>


## 4. Setup stilux-dotfiles
- You need to install **arch linux** and **i3 window manager** before setup this config
- Open terminal and copy this command
```
git clone https://github.com/sontungexpt/stilux-dotfiles.git && cd stilux-dotfiles && chmod +x setup && ./setup && cd .. && rm -rf stilux-dotfiles
```
- Follow the instructions in the terminal when the scripts is running

<!-- ## 5. Neovim Features -->
<!-- <details><blockquote> -->

<!-- - **Theme**: tokyostorm -->
<!-- - **Git**: no configured yet -->
<!-- - **Debugger**: no conifgured yet -->
<!-- - **Ai**: Github copilot -->

<!-- </blockquote></details> -->

## 5. Usage

#### i3 key binding
<details><blockquote>

- h, j, k, l for right, down, up, left
- mod + shift + s to print a select area and copy it to clipboard, no save the picture
- printscr to print the full-screen desktop
- shift + printscr to print a select area and save it to Pictures/Screenshots
- crtl + printscr to capture the focused window and save it to the directory
- mod + shift + f to open flameshot gui
- mod + t to open thunar file manager
- mod + g to open github
- mod + m to open bluetooth manager
- mod + n to open wifi-hotspot
- mod + d to open rofi
- mod + b to open brave
- mod + u to open UIT school web (remove it if you not a student of University of Information Of Technology)
- mod + shift + u to open UIT course (remove it if you not a student of University of Information Of Technology)
- mod +x to lock screen

</blockquote></details>

#### Neovim
<details><blockquote>

- Support copilot
- Highlighting with tree-sitter
- File Explorer: nvim-tree
- Support autocomplete
- Support telescope
- Theme: Tokyostorm
- Status line: lualine
- Tab line: bufferline

</blockquote></details>
