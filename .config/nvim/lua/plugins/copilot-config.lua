if vim.fn.empty(vim.fn.glob('~/.config/github-copilot')) > 0 then
  print("Invoke :Copilot setup to use github-copilot")
end
