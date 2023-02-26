----------Example mapping----------

-- Map to a Lua function:
  --vim.keymap.set('n', 'lhs', function() print("real lua function") end)

-- Map to multiple modes:
  --vim.keymap.set({'n', 'v'}, '<leader>lr', vim.lsp.buf.references, { buffer=true })

-- Buffer-local mapping:
  --vim.keymap.set('n', '<leader>w', "<cmd>w<cr>", { silent = true, buffer = 5 })

-- Expr mapping:
  --vim.keymap.set('i', '<Tab>', function()
    --return vim.fn.pumvisible() == 1 and "<C-n>" or "<Tab>"
  --end, { expr = true })

-- <Plug> mapping:
  --vim.keymap.set('n', '[%', '<Plug>(MatchitNormalMultiBackward)')

-----------Mappings----------
local opts = { noremap = true, silent = true }
local opts_without_noremap = { noremap = false, silent = true }
local opts_without_silent = { noremap = true, silent = false }
local opts_expr = {expr = true, replace_keycodes = true, noremap = true, silent = true}
local map = vim.api.nvim_set_keymap

--NvimTree
map("n","<C-b>", ":NvimTreeToggle<cr>", opts)
map("i","<C-b>", "<esc>:NvimTreeToggle<cr>", opts)
map("v","<C-b>", "<esc>:NvimTreeToggle<cr>", opts)
map("c","<C-b>", "<esc>:NvimTreeToggle<cr>", opts)

--Floaterm
vim.g.floaterm_keymap_toggle = "<C-t>"
vim.g.floaterm_keymap_new = "<C-n><C-t>"

map("t","gt", "<C-\\><C-n>:FloatermNext<cr>", opts)

map("t","gT", "<C-\\><C-n>:FloatermPrev<cr>", opts)

map("t","kk", "<C-\\><C-n>:FloatermKill<cr>:FloatermToggle<cr>", opts)

--Telescope
map("n","<C-p>", ":Telescope find_files<cr>", opts)
map("i","<C-p>", "<esc>:Telescope find_files<cr>", opts)
map("v","<C-p>", "<esc>:Telescope find_files<cr>", opts)
map("n","<leader>fm", "<esc>:Telescope media_files<cr>", opts)
map("n","<leader>fg", "<esc>:Telescope live_grep<cr>", opts)
map("n","<leader>fb", "<esc>:Telescope buffers<cr>", opts)
map("n","<leader>fh", "<esc>:Telescope help_tags<cr>", opts)
map("n","<leader>fp", "<esc>:Telescope project<cr>", opts)

--ccc (Color-picker)
map("n","<A-c>", ":CccPick<cr>" ,opts)
map("i","<A-c>", "<esc>:CccPick<cr>" ,opts)
map("v","<A-c>", "<esc>:CccPick<cr>" ,opts)
