# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
PS1='[\u@\h \W]\$ '

# Nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"                   # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion

export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

export PATH="$HOME/bin:/usr/local/bin:/usr/local/sbin:/usr/sbin:/sbin:/usr/bin:/bin:/usr/local/games:/usr/games"

alias config='/usr/bin/git --git-dir=$HOME/dotfiles/ --work-tree=$HOME'

# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/stilux/anaconda3/bin/conda' 'shell.bash' 'hook' 2>/dev/null)"
if [ $? -eq 0 ]; then
	eval "$__conda_setup"
else
	if [ -f "/home/stilux/anaconda3/etc/profile.d/conda.sh" ]; then
		. "/home/stilux/anaconda3/etc/profile.d/conda.sh"
	else
		export PATH="/home/stilux/anaconda3/bin:$PATH"
	fi
fi
unset __conda_setup
# <<< conda initialize <<<

#Google-chrome
export CHROME_EXECUTABLE="/usr/bin/google-chrome-stable"
