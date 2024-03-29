#!/bin/bash
#

# open nvim in alacritty terminal
nvima() {
	if [ "$TERM" = "xterm-kitty" ] && command -v alacritty &>/dev/null; then
		# remove the kitty terminal window and open alacritty
		local kitty_pid=$(xprop -root -notype | sed -n '/^_NET_ACTIVE_WINDOW/ s/^.*# *\|\,.*$//g p')
		setsid -f alacritty -e "$SHELL" -c "nvim $@"
		xkill -id "$kitty_pid"
	else
		command nvim "$@"
	fi
}

alacritty() {
	if [ "$TERM" = "xterm-kitty" ] && command -v alacritty &>/dev/null; then
		# remove the kitty terminal window and open alacritty
		local kitty_pid=$(xprop -root -notype | sed -n '/^_NET_ACTIVE_WINDOW/ s/^.*# *\|\,.*$//g p')
		setsid -f alacritty "$@"
		xkill -id "$kitty_pid"
	else
		command alacritty "$@"
	fi
}

# ya shell wrapper that provides the ability to change the current working directory when exiting Yazi.
# https://yazi-rs.github.io/docs/quick-start
function yazi() {
	local tmp="$(mktemp -t "yazi-cwd.XXXXX")"
	command yazi "$@" --cwd-file="$tmp"
	if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
		cd -- "$cwd" || exit
	fi
	rm -f -- "$tmp"
}

function fnm() {
	if [[ "$1" == "install" ]] && [[ "$2" == "node" ]]; then
		local new_node_version="$(command fnm ls-remote | grep -v - | tail -1)"
		command fnm install "$new_node_version" && command fnm default "$new_node_version"
	else
		command fnm "$@"
	fi
}

function cdg() {
	local root_markers=(".project", ".prettierrc", "pom.xml")
	local dir=$PWD

	local git_dir="$(git rev-parse --show-toplevel 2>/dev/null)"
	if [[ -n "$git_dir" ]]; then
		cd "$git_dir" || exit
		return
	fi

	while [[ "$dir" != "/" ]]; do
		for marker in "${root_markers[@]}"; do
			local marker_path="$dir/$marker"
			if [[ -f "$marker_path" ]]; then
				cd "$dir" || exit
				return
			fi
		done
		dir="$(dirname "$dir")"
	done
	echo "No project root found" && return 1
}

function mvnw17() {
	# save the current directory so we can go back to it later
	local current_dir=$PWD
	# save the current JAVA_HOME so we can go back to it later
	local current_java_home=$JAVA_HOME
	local dir=$PWD

	while [[ "$dir" != "/" ]]; do
		if [[ -f "$dir/mvnw" ]]; then
			cd "$dir" || exit
			export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
			eval "$dir/mvnw" "$@"

			# don't need to move to the root directory if you want to move to the root directory,
			# just uncomment 3 lines in the while loop block code and comment the following line
			# eval "$dir/mvnw -f $dir/pom.xml" "$@"

			export JAVA_HOME=$current_java_home
			cd "$current_dir" || exit
			return
		fi
		dir="$(dirname "$dir")"
	done
	echo "No mvnw found"
}

alias mvnw='mvnw17'

function gradlew17() {
	local dir=$PWD

	while [[ "$dir" != "/" ]]; do
		if [[ -f "$dir/gradlew" ]]; then
			eval "$dir/gradlew -Dorg.gradle.java.home=/usr/lib/jvm/java-17-openjdk" "$@"
			return
		fi
		dir="$(dirname "$dir")"
	done
	echo "No gradlew found"
}

alias ls="ls --color=auto"
alias lf="export PATH=${XDG_CONFIG_HOME:-$HOME/.config}/lf/bin:$PATH;lf $@"

# ldoc
alias ldoc='ldoc-custom default'

# Git Bare
alias config='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'
alias config-add-setup='cp $HOME/scripts/setup $HOME/setup && config add setup && config commit -m "chore: update setup file scripts" && config push && rm ~/setup'

# Config alias
alias nvimconfig='nvim ~/.config/nvim/init.lua'
alias nvimaconfig='nvima ~/.config/nvim/init.lua'
alias i3config='nvim ~/.config/i3/config'
alias lfconfig='nvim ~/.config/lf/lfrc'
alias zshconfig='nvim ~/.zshrc'
alias zshalias='nvim ~/.config/zsh/aliases.zsh'
alias zshexport='nvim ~/.config/zsh/exports.zsh'
alias zshoption='nvim ~/.config/zsh/options.zsh'
alias ohmyzshconfig='nvim ~/.config/zsh/oh-my-zsh.zsh'
alias polybarconfig='nvim ~/.config/polybar/config.ini'
alias roficonfig='nvim ~/.config/rofi/config.rasi'
alias picomconfig='nvim ~/.config/picom/picom.conf'
alias kittyconfig='nvim ~/.config/kitty/kitty.conf'
alias alacrittyconfig='nvim ~/.config/alacritty/alacritty.yml'
alias fishconfig='nvim ~/.config/fish/config.fish'
alias dunstconfig='nvim ~/.config/dunst/dunstrc'
alias ewwconfig='nvim ~/.config/eww/eww.yuck'
alias yaziconfig='nvim ~/.config/yazi/yazi.toml'
alias ya=yazi
