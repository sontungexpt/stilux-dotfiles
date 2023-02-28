local status_ok, mason_nvim_dap = pcall(require, "mason-nvim-dap")

if not status_ok then
  return
end

mason_nvim_dap.setup {
  -- Makes a best effort to setup the various debuggers with
  -- reasonable debug configurations
  automatic_setup   = true,
  automatic_install = true,

  -- You'll need to check that you have the required things installed
  -- online, please don't ask me how to install them :)
  ensure_installed  = {
    -- Update this to ensure that you have the debuggers for the langs you want
    'python',
    'codelldb',
    'dart',
    'js',
    'kotlin',
    'javadbg',
    'coreclr'
  },
}
mason_nvim_dap.setup_handlers()
