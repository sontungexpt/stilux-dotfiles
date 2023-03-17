local options = vim.opt
local autocmd = vim.api.nvim_create_autocmd
local cmd = vim.cmd

--leader key
--let mapleader = "\<Space>"

cmd("filetype plugin on")
cmd("filetype plugin indent on")

--Syntax
cmd("syntax enable")
cmd("syntax on")

--Line number
options.number = true
options.relativenumber = false
options.cmdheight = 1

--Encoding
options.encoding = "utf-8"
options.mouse = "a"
options.mousemoveevent = true

options.incsearch = true
options.hlsearch = true

--Tabs & indentation
options.tabstop = 2
options.softtabstop = 2
options.shiftwidth = 2
options.expandtab = true
options.autoindent = true
options.smartindent = true
options.smarttab = true
options.backspace = "indent,eol,start"

--Undo file
options.undofile = true

--Update time
options.updatetime = 300 --default 4000ms

--Line wrapping
options.wrap = false

--No backup files
options.swapfile = false
options.backup = false
options.writebackup = false

--Search settings
options.ignorecase = true
--options.smartcase = true

--Cursor line
options.cursorline = true
options.cursorcolumn = true

--Appearance
options.termguicolors = true
cmd [[set t_Co=256]]
options.background = "dark"
options.signcolumn = "yes"

--List
options.list = true
cmd [[set listchars=tab:▸\ ,trail:·]]

--Clipboard
options.clipboard:append { "unnamedplus" }
cmd [[set go+=a]]

--Split window
options.splitbelow = true
options.splitright = true

--Collapse block of code
options.foldenable = true
options.foldmethod = "indent"
options.foldlevel = 99
options.foldlevelstart = 10
options.foldcolumn = "0"

options.wildignore:append {
  "*.pyc",
  "*.o",
  "*.obj",
  "*.svn",
  "*.swp",
  "*.class",
  "*.hg",
  "*.DS_Store",
  "*.min.*",
  "node_modules"
}

--Enable syntax for .json files
cmd([[
  augroup EnableSyntax
    autocmd!
    autocmd BufRead,BufNewFile *.json set filetype=jsonc
  augroup END
]])

-- Cd to the directory after open file exclude copilot
-- cmd([[
--   augroup AutoChangeDirectory
--     autocmd!
--     autocmd BufReadPost *.* cd %:p:h|pwd
--   augroup END
-- ]])


--Remove whitespace on save
autocmd('BufWritePre', {
  pattern = '',
  command = ":%s/\\s\\+$//e"
})
