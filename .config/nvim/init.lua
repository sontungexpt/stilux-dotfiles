local modules = {
  "core.options",
  "core.keymaps",
  "core.plugins",
  "core.plugins-keymaps"
}

local function GetLuaFilesInDir(dirUrl)
  return io.popen('find "' .. dirUrl .. '" -type f' .. ' -name "*.lua"')
end

local function SourceConfigFile(dirUrl)
  local files = GetLuaFilesInDir(dirUrl)

  if files ~= nil then
    for file in files:lines() do
      --Loop through all files
      vim.cmd("luafile " .. file)
    end
  end
end

-- Main Code

-- Refresh module cache
for _, module in pairs(modules) do
  package.loaded[module] = nil
  require(module)
end

-- Source all files in config dir
SourceConfigFile(vim.fn.stdpath('config') .. '/lua/plugins/')

vim.g.ruby_host_prog = '~/.rbenv/versions/3.2.2/bin/neovim-ruby-host'
vim.g.loaded_perl_provider = 0
vim.g.python3_host_prog = '/usr/bin/python3'
-- vim.g.node_host_prog = '~/.nvm/versions/node/v19.8.1/bin/neovim-node-host'
