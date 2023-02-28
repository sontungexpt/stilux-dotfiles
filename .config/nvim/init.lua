local modules = {
  "core.options",
  "core.keymaps",
  "core.plugins",
  "core.plugins-keymaps"
}

-- Refresh module cache
for k, module in pairs(modules) do
  package.loaded[module] = nil
  require(module)
end
