Plug 'nvim-treesitter/nvim-treesitter', {'do': ':TSUpdate'}
"  https://github.com/nvim-treesitter/nvim-treesitter
Plug 'windwp/nvim-ts-autotag'
"  https://github.com/windwp/nvim-ts-autotag
Plug 'p00f/nvim-ts-rainbow'

Plug 'Fymyte/tree-sitter-rasi'

Plug 'ap/vim-css-color'
Plug 'Fymyte/rasi.vim'
"  https://github.com/p00f/nvim-ts-rainbow

"-----------Tree-sitter-----------"
function TreesitterSetup()
  lua << EOF
  require('nvim-treesitter.configs').setup {
    ensure_installed = {
      "c",
      "cpp",
      "bash",
      "cmake",
      "go",
      "java",
      "json",
      "python",
      "regex",
      "rust",
      "toml",
      "tsx",
      "typescript",
      "yaml",
      "lua",
      "dart",
      "ruby",
      "html",
      "javascript",
      "css",
      "c_sharp",
      "vim",
      "markdown",
      "help",
      "rasi"
    },
    ignore_install = { },
    highlight = {
      enable = true,
      disable ={"html","css"}
      --disable = {"html","javascript","css"}
    },
    indent = {
      enable = true
    },
    additional_vim_regex_highlighting = false,
    autotag = {
      enable = true,
      filetypes = { "html" , "xml" ,"jsx" },
    },
    rainbow = {
      enable = true,
      disable = {"html", "javascript"}, --list of languages you want to disable the plugin for
      extended_mode = true, -- Also highlight non-bracket delimiters like html tags, boolean or table: lang -> boolean
      max_file_lines = nil, -- Do not enable for files with more than n lines, int
      colors = {
        "#DA4E4E",
        "#ff8000",
        "#ffbf00",
        "#ffff00",
        "#bfff00",
        "#00ff00",
        "#00ffbf",
        "#00ffff",
        "#00bfff",
        "#0080ff",
        "#0066ff",
        "#0000ff",
        "#8000ff",
        "#bf00ff",
        "#ff00ff",
        "#ff00bf",
        "#ff0080"
      }, -- table of hex strings
      -- termcolors = {} -- table of colour name strings
    }
  }
  vim.lsp.handlers['textDocument/publishDiagnostics'] = vim.lsp.with(
  vim.lsp.diagnostic.on_publish_diagnostics,
  {
      underline = true,
      virtual_text = {
        spacing = 5,
        severity_limit = 'Warning',
      },
      update_in_insert = true,
  })
EOF
endfunction


augroup TreesitterOverrides
  autocmd!
  autocmd User PlugLoaded call TreesitterSetup()
augroup END
