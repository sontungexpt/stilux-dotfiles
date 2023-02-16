Plug 'nvim-lua/plenary.nvim'
Plug 'nvim-telescope/telescope.nvim', { 'tag': '0.1.0' }
Plug 'nvim-telescope/telescope-media-files.nvim'
Plug 'jvgrootveld/telescope-zoxide'
Plug 'nvim-telescope/telescope-fzy-native.nvim'
Plug 'nvim-telescope/telescope-project.nvim'
Plug 'nvim-lua/popup.nvim'
"  Plug 'BurntSushi/ripgrep'
"  Plug 'sharkdp/fd'

"----------TeleScope----------"

":Telescope find_files
noremap <C-p> :Telescope find_files<cr>
nnoremap <leader>fg <cmd>Telescope live_grep<cr>
nnoremap <leader>fb <cmd>Telescope buffers<cr>
nnoremap <leader>fh <cmd>Telescope help_tags<cr>
nnoremap <leader>fp <cmd>Telescope project<cr>


function SetupTelescope()
lua << EOF
local actions = require("telescope.actions")
require('telescope').setup({
    defaults = {
        mappings = {
            i = {
                ["<esc>"] = actions.close
            }
        },
        file_ignore_patterns = {
            "^.git/",
            "^./.git/",
            "^node_modules/",
            "^vendor/",
        }
    },
    pickers = {
        find_files = {
            hidden = true
        }
    },
    extensions = {
        media_files = {
        -- filetypes whitelist
        -- defaults to {"png", "jpg", "mp4", "webm", "pdf"}
        filetypes = {"png", "jpg", "mp4", "webm", "pdf"},
        find_cmd = "rg" -- find command (defaults to `fd`)
        }
    }
})
require('telescope').load_extension('media_files')
require('telescope').load_extension('zoxide')
require('telescope').load_extension('project')
require('telescope').load_extension('fzy_native')
EOF
endfunction

augroup TelescopeOverrides
    autocmd!
    autocmd User PlugLoaded call SetupTelescope()
augroup END