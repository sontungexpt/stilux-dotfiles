" Install vim-plug if not found
let data_dir = has('nvim') ? stdpath('data') . '/site' : '~/.vim'
if empty(glob(data_dir . '/autoload/plug.vim'))
  silent execute '!curl -fLo '.data_dir.'/autoload/plug.vim --create-dirs  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim'
  "autocmd VimEnter * PlugInstall --sync | source $MYVIMRC
endif

"Auto install if having new plugin"
autocmd VimEnter * if len(filter(values(g:plugs), '!isdirectory(v:val.dir)'))
  \| PlugInstall --sync | PlugUpdate --sync | q
\| endif

"auto clear plugin"
autocmd VimEnter * PlugClean|q


call plug#begin('~/.config/nvim/bundle')
for f in split(glob('~/.config/nvim/configs/plugins/*.vim'), '\n')
   exe 'source' f
endfor
call plug#end()

"  autocmd VimEnter * PlugInstall --sync|PlugClean|q
doautocmd User PlugLoaded
