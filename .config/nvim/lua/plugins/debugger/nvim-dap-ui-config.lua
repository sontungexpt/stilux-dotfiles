local dap_ui_status_ok, dapui = pcall(require, "dapui")
local dap_status_ok, dap = pcall(require, "dap")

if not dap_ui_status_ok then
  return
end

dapui.setup {
  -- Set icons to characters that are more likely to work in every terminal.
  -- Feel free to remove or use ones that you like more! :)
  -- Don't feel like these are good choices.
  controls = {
    icons = {
      pause = '',
      play = '▶',
      step_into = '',
      step_over = '',
      step_out = '',
      step_back = '',
      run_last = '',
      terminate = '⏹',
    },
  },
}

if not dap_status_ok then
  return
end

dap.listeners.after.event_initialized['dapui_config'] = dapui.open
dap.listeners.before.event_terminated['dapui_config'] = dapui.close
dap.listeners.before.event_exited['dapui_config'] = dapui.close

-- Install golang specific config
--require('dap-go').setup()
