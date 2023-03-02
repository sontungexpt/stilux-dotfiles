-- https://github.com/numToStr/Comment.nvim
local status_ok, comment = pcall(require, "Comment")

if not status_ok then
  return
end

comment.setup {
  ---Add a space b/w comment and the line
  padding = true,
  ---Whether the cursor should stay at its position
  sticky = true,
  ---Lines to be ignored while (un)comment
  ---ignore empty lines
  ---ignore = '^$'
  ---ignores line that starts with `local` (excluding any leading whitespace)
  ---ignore = '^(%s*)local'
  ---ignore any lines similar to arrow function
  ---ignore = '^const(.*)=(%s?)%((.*)%)(%s?)=>'
  ---ignore = function()
  ---  -- Only ignore empty lines for lua files
  ---  if vim.bo.filetype == 'lua' then
  ---    return '^$'
  ---  end
  ---end,
  ignore = "^$",
  ---LHS of toggle mappings in NORMAL mode
  toggler = {
    ---Line-comment toggle keymap
    line = 'gcc',
    ---Block-comment toggle keymap
    block = 'gbc',
  },
  ---LHS of operator-pending mappings in NORMAL and VISUAL mode
  opleader = {
    ---Line-comment keymap
    line = 'gc',
    ---Block-comment keymap
    block = 'gb',
  },
  ---LHS of extra mappings
  extra = {
    ---Add comment on the line above
    above = 'gcO',
    ---Add comment on the line below
    below = 'gco',
    ---Add comment at the end of line
    eol = 'gcA',
  },
  ---Enable keybindings
  ---NOTE: If given `false` then the plugin won't create any mappings
  mappings = {
    ---Operator-pending mapping; `gcc` `gbc` `gc[count]{motion}` `gb[count]{motion}`
    basic = true,
    ---Extra mapping; `gco`, `gcO`, `gcA`
    extra = true,
  },
  ---Function to call before (un)comment
  pre_hook = nil,
  ---Function to call after (un)comment
  post_hook = nil,
}
