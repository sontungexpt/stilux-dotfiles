local modules = {
  "core.options",
  "core.keymaps",
  "core.plugins",
  "core.plugins-keymaps"
}

function SourceConfigFile(dirUrl)
  -- Get all files in directory
  local files = io.popen('find "' .. dirUrl .. '" -type f')

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

SourceConfigFile(vim.fn.stdpath('config') .. '/lua/plugins/')
