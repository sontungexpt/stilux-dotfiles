local config = require("core.utils").load_config()
local autocmd = vim.api.nvim_create_autocmd
local cmd = vim.cmd
local g = vim.g


-- Don't list quickfix buffers
autocmd("FileType", {
  pattern = "qf",
  callback = function()
    vim.opt_local.buflisted = false
  end,
})

-- Reload config on-save
-- autocmd("BufWritePost", {
--   pattern = vim.tbl_map(
--     vim.fs.normalize,
--     vim.fn.glob(vim.fn.stdpath "config" .. "/lua/**/*.lua", true, true, true)
--   ),
--   group = vim.api.nvim_create_augroup("ReloadConfig", {}),
--   callback = function(opts)
--     local fp = vim.fn.fnamemodify(vim.fs.normalize(vim.api.nvim_buf_get_name(opts.buf)), ":r") --[[@as string]]
--     local app_name = vim.env.NVIM_APPNAME and vim.env.NVIM_APPNAME or "nvim"
--     local module = string.gsub(fp, "^.*/" .. app_name .. "/lua/", ""):gsub("/", ".")

--     config = require("core.utils").load_config()

--     g.transparency = config.ui.transparency

--     -- statusline
--     -- vim.opt.statusline = "%!v:lua.require('lualine." .. config.ui.statusline.theme .. "').run()"

--     -- vim.cmd("redraw!")
--   end,
-- })

--Remove whitespace on save
autocmd('BufWritePre', {
  pattern = '',
  command = ":%s/\\s\\+$//e"
})

-- Move to relative line number when in visual mode
cmd([[ autocmd ModeChanged * if mode() == 'v' | set relativenumber | else | set norelativenumber | endif ]])

-------------------------------------- PLugins autocmd -----------------------------------------
--cmd([[
--  augroup HightlightColors
--  autocmd!
--  autocmd  VimEnter, BufEnter, BufLeave *.* HightligtColorsOn
--  augroup END
--]])


autocmd({ 'BufEnter', 'BufAdd', 'BufNew', 'BufNewFile', 'BufWinEnter' }, {
  group = vim.api.nvim_create_augroup('TS_FOLD_WORKAROUND', {}),
  callback = function()
    vim.opt.foldmethod = 'expr'
    vim.opt.foldexpr   = 'nvim_treesitter#foldexpr()'
  end
})

