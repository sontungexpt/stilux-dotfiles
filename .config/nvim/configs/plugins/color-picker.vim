Plug 'uga-rosa/ccc.nvim'
"  https://github.com/uga-rosa/ccc.nvim


"----------ccc.nvim----------"
function SetUpCCC()
lua<<EOF
    local ccc = require("ccc")
	local mapping = ccc.mapping
	ccc.setup({
		-- Your favorite settings
	})
EOF
endfunction

nnoremap <silent> <A-c> :CccPick<cr>


augroup CCCOverride
    autocmd!
    autocmd User PlugLoaded call SetUpCCC()
augroup END