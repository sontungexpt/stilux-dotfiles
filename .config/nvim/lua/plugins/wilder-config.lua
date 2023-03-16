local status_ok, wilder = pcall(require, "wilder")

if not status_ok then
  return
end

wilder.setup {
  modes = { ':', '/', '?' },
  next_key = "<Tab>",
  previous_key = "<S-Tab>",
  accept_key = "<Down>",
  reject_key = "<Up>",
  enable_cmdline_enter = 1,
}

wilder.set_option('renderer', wilder.popupmenu_renderer(
  wilder.popupmenu_palette_theme({
    border = 'rounded', -- 'single', 'double', 'rounded' or 'solid'
    max_height = '80%', -- max height of the palette
    min_height = 0, -- set to the same as 'max_height' for a fixed height window
    prompt_position = 'top', -- 'top' or 'bottom' to set the location of the prompt
    reverse = 0, -- set to 1 to reverse the order of the list, use in combination with 'prompt_position'
    -- highlighter = wilder.basic_highlighter(),
    left = { ' ', wilder.popupmenu_devicons() },
  })
))
