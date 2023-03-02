local status_ok, ccc = pcall(require, "ccc")

if not status_ok then
  return
end

local ccc = require("ccc")
local mapping = ccc.mapping

ccc.setup({
  -- Your favorite settings
})
