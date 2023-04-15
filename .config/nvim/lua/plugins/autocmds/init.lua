local autocmd = vim.api.nvim_create_autocmd
local cmd = vim.cmd
local g = vim.g

-- Mason
autocmd({ 'VimEnter' }, {
  group = vim.api.nvim_create_augroup('MasonCmds', {}),
  callback = function()
    local mason_installed_packages = require('plugins.autocmds.mason').get_installed_packages()
    local ensure_packages = require('plugins.configs.mason').ensure_installed
    if #mason_installed_packages ~= #ensure_packages then
      vim.cmd("MasonSyncEnsurePackages")
      vim.cmd("MasonEnsurePackages")
    end
  end
})
