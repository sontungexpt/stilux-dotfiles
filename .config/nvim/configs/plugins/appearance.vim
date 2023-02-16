Plug 'Yggdroot/indentLine'
Plug 'jiangmiao/auto-pairs'
"  https://github.com/jiangmiao/auto-pairs
Plug 'brenoprata10/nvim-highlight-colors'
Plug 'tpope/vim-commentary'
" Plug 'xiyaowong/nvim-transparent'

"----------IndentLine---------"

let g:indentLine_char = '│'
"  let g:indentLine_char_list = ['│', '╎', '┆', '┊']

"leading space"
let g:indentLine_leadingSpaceEnabled = 1
let g:indentLine_leadingSpaceChar = '.'

"conceal"
let g:indentLine_concealcursor = 'incv'
let g:indentLine_conceallevel = 2
let g:indentLine_setConceal = 1

"color"
let g:indentLine_color_tty_light = 7
let g:indentLine_color_dark = 1
let g:indentLine_color_term = 239
let g:indentLine_color_gui = '#4b5154'

"  This variable specify a list of file types.
"  When opening these types of files, the plugin is disabled by
"  default.
let g:indentLine_fileTypeExclude = ['text', 'sh']
"  Default value is [] which means no file types are excluded.

"  This variable specify a list of buffer types.
"  When opening these types of buffers, the plugin is disabled
"  by default.
let g:indentLine_bufTypeExclude = ['help', 'terminal', 'nvim-tree', 'coc-explorer']

"  This variable specify a list of buffer names, which can be
"  regular expression. If the buffer's name fall into this list,
"  the indentLine won't display.
let g:indentLine_bufNameExclude = ['_.*', 'NERD_tree.*', 'nvim-tree.*', 'nvim-tree', 'coc-explorer','NvimTree_1']


"----------Highlight Color----------"
function SetHighlightColor()
lua <<EOF
  require("nvim-highlight-colors").setup {
    render = 'background', -- or 'foreground' or 'first_column'
    enable_named_colors = true,
    enable_tailwind = true
  }
EOF
endfunction


augroup HighlightColorOvverides
  autocmd!
  autocmd User PlugLoaded call SetHighlightColor()
augroup END

autocmd VimEnter * HighlightColorsOn



"----------Auto Pairs----------"
let g:AutoPairsFlyMode = 1

"  <CR>  : Insert new indented line after return if cursor in blank brackets or quotes.
"  <BS>  : Delete brackets in pair
"  <M-p> : Toggle Autopairs (g:AutoPairsShortcutToggle)
"  <M-e> : Fast Wrap (g:AutoPairsShortcutFastWrap)
"  <M-n> : Jump to next closed pair (g:AutoPairsShortcutJump)
"  <M-b> : BackInsert (g:AutoPairsShortcutBackInsert)




