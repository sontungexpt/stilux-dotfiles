local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

local plugins = {
  {
    'nvim-tree/nvim-tree.lua',
    dependencies = {
      'nvim-tree/nvim-web-devicons',
    },
    version = 'nightly',
    config = function()
      require("plugins.nvim-tree-config")
    end,
  },

  -- nvim-treesitter
  {
    'nvim-treesitter/nvim-treesitter',
    dependencies = {
      'Fymyte/tree-sitter-rasi',
      'p00f/nvim-ts-rainbow',
      'windwp/nvim-ts-autoversion',
      'Fymyte/rasi.vim',
    },
    build = function()
      local ts_update = require('nvim-treesitter.install').update({ with_sync = true })
      ts_update()
    end,
    config = function()
      require("plugins.nvim-treesitter-config")
    end,
  },

  -- Hightlight-colors
  {
    'brenoprata10/nvim-highlight-colors',
    config = function()
      require("plugins.hightlight-colors-config")
    end
  },

  -- TokyoNight Theme
  {
    'folke/tokyonight.nvim',
    config = function()
      require("plugins.ui.tokyonight-config")
    end,
  },

  -- Lspconfig
  {
    'neovim/nvim-lspconfig',
    config = function()
      require("plugins.lsp.nvim-lspconfig-config")
    end,
  },

  -- Null-ls
  {
    'jose-elias-alvarez/null-ls.nvim',
    config = function()
      require("plugins.lsp.null-ls-config")
    end,
  },

  -- Mason
  {
    "williamboman/mason.nvim",
    dependencies = {
      'williamboman/mason-lspconfig.nvim',
    },
    config = function()
      require("plugins.lsp.mason-config")
    end,
  },

  -- Cmp
  {
    'hrsh7th/nvim-cmp',
    dependencies = {
      'hrsh7th/cmp-nvim-lsp',
      'hrsh7th/cmp-buffer',
      'hrsh7th/cmp-path',
      'hrsh7th/cmp-cmdline',
      'rafamadriz/friendly-snippets',

      -- For luasnip rs
      'L3MON4D3/LuaSnip',
      'saadparwaiz1/cmp_luasnip',
    },
    config = function()
      require("plugins.lsp.cmp-config")
    end,
  },

  -- Markdown-preview
  {
    "iamcco/markdown-preview.nvim",
    build = function() vim.fn["mkdp#util#install"]() end,
  },

  -- Dap
  --  {
  --   "rcarriga/nvim-dap-ui",
  --   dependencies = {
  --     "mfussenegger/nvim-dap",
  --     "jay-babu/mason-nvim-dap.nvim",
  --     "theHamsta/nvim-dap-virtual-text",
  --   },
  --   config = function()
  --     require("plugins.debugger.nvim-dap-ui-config")
  --   end,
  -- },
  --  {
  --   "mfussenegger/nvim-dap",
  --   config = function()
  --     require("plugins.debugger.nvim-dap-config")
  --   end,
  -- },
  --  {
  --   "jay-babu/mason-nvim-dap.nvim",
  --   config = function()
  --     require('plugins.debugger.mason-nvim-dap-config')
  --   end
  -- },
  --  {
  --   "theHamsta/nvim-dap-virtual-text",
  --   config = function()
  --     require("plugins.debugger.nvim-dap-virtual-text-config")
  --   end
  -- },

  -- Wilder
  {
    'gelguy/wilder.nvim',
    dependencies = { 'romgrk/fzy-lua-native' },
    config = function()
      require("plugins.wilder-config")
    end,
  },

  -- Floaterm
  --  {
  --   'voldikss/vim-floaterm',
  --   config = function()
  --     require("plugins.terminal.floaterm-config")
  --   end
  -- },

  -- Toggleterm
  { "akinsho/toggleterm.nvim", version = '*',
    config = function()
      require("plugins.terminal.toggleterm-config")
    end },

  -- Comment
  {
    'numToStr/Comment.nvim',
    config = function()
      require("plugins.comments.comment-config")
    end
  },

  -- Todo-comments
  {
    "folke/todo-comments.nvim",
    dependencies = "nvim-lua/plenary.nvim",
    config = function()
      require("plugins.comments.todo-comments-config")
    end
  },

  -- Telescope
  {
    'nvim-telescope/telescope.nvim', version = '0.1.1',
    dependencies = {
      'nvim-lua/plenary.nvim',
      'nvim-lua/popup.nvim',
      'jvgrootveld/telescope-zoxide',
      'nvim-telescope/telescope-fzy-native.nvim',
      'nvim-telescope/telescope-project.nvim',
      'nvim-telescope/telescope-media-files.nvim',
      'BurntSushi/ripgrep',
      'sharkdp/fd'
    },
    config = function()
      require("plugins.telescope.telescope-config")
    end,
  },

  -- Neoclip
  {
    "AckslD/nvim-neoclip.lua",
    dependencies = {
      {
        'kkharji/sqlite.lua',
        module = 'sqlite'
      },
      -- you'll need at least one of these
      {
        'nvim-telescope/telescope.nvim'
      },
      -- {'ibhagwan/fzf-lua'},
    },
    config = function()
      require('plugins.telescope.nvim-neoclip-config')
    end,
  },

  -- Which-key
  {
    "folke/which-key.nvim",
    config = function()
      require("plugins.which-key-config")
    end,
  },

  -- Nvim-cursorline
  {
    'yamatsum/nvim-cursorline',
    config = function()
      require("plugins.nvim-cursorline-config")
    end,
  },

  --Color Picker
  {
    'uga-rosa/ccc.nvim',
    config = function()
      require("plugins.color-picker-config")
    end,
  },

  -- Pretty-fold - fold-preview
  { 'anuvyklack/fold-preview.nvim',
    dependencies = 'anuvyklack/keymap-amend.nvim',
    config = function()
      require('plugins.fold.fold-preview-config')
    end,
  },

  {
    'anuvyklack/pretty-fold.nvim',
    config = function()
      require('plugins.fold.pretty-fold-config')
    end
  },

  --  {
  --   'kevinhwang91/nvim-ufo',
  --   dependencies = 'kevinhwang91/promise-async',
  --   config = function()
  --     require('plugins.fold.nvim-ufo-config')
  --   end
  -- },

  --Lualine
  {
    'nvim-lualine/lualine.nvim',
    dependencies = {
      'kyazdani42/nvim-web-devicons',
      lazy = true
    },
    config = function(plugin)
      require("plugins.ui.lualine-config")
    end
  },

  -- Bufferline
  {
    'akinsho/bufferline.nvim', version = "v3.*",
    dependencies = 'nvim-tree/nvim-web-devicons',
    config = function()
      require("plugins.ui.bufferline-config")
    end
  },

  --Nvim-autopairs
  {
    "windwp/nvim-autopairs",
    config = function()
      require("plugins.nvim-autopairs-config")
    end
  },

  -- Indent-blankline
  {
    "lukas-reineke/indent-blankline.nvim",
    config = function()
      require("plugins.indent-blankline-config")
    end,
  },

  --Github Copilot
  {
    "zbirenbaum/copilot.lua",
    cmd = "Copilot",
    event = "InsertEnter",
    config = function()
      require("plugins.copilot-config")
    end,
  },

  -- Nvim-surround
  {
    "kylechui/nvim-surround",
    version = "*", --  for stability; omit to use `main` branch for the latest features
    config = function()
      require("plugins.nvim-surround-config")
    end,
  },

  -- Git Signs
  {
    'lewis6991/gitsigns.nvim',
    config = function()
      require('plugins.git.gitsigns-config')
    end,
  },

  -- Git Conflict
  { 'akinsho/git-conflict.nvim', version = "*",
    config = function()
      require('plugins.git.git-conflict-config')
    end,
  },
}

local opts = {
  root = vim.fn.stdpath("data") .. "/lazy", -- directory where plugins will be installed
  defaults = {
    lazy = false, -- should plugins be lazy-loaded?
    version = nil,
    -- default `cond` you can use to globally disable a lot of plugins
    -- when running inside vscode for example
    cond = nil, ---@type boolean|fun(self:LazyPlugin):boolean|nil
    -- version = "*", -- enable this to try installing the latest stable versions of plugins
  },
  -- leave nil when passing the spec as the first argument to setup()
  spec = nil, ---@type LazySpec
  lockfile = vim.fn.stdpath("config") .. "/lazy-lock.json", -- lockfile generated after running update.
  concurrency = nil, ---@type number limit the maximum amount of concurrent tasks
  git = {
    -- defaults for the `Lazy log` command
    -- log = { "-10" }, -- show the last 10 commits
    log = { "--since=3 days ago" }, -- show commits from the last 3 days
    timeout = 120, -- kill processes that take more than 2 minutes
    url_format = "https://github.com/%s.git",
    filter = true,
  },
  dev = {
    -- directory where you store your local plugin projects
    path = "~/projects",
    ---@type string[] plugins that match these patterns will use your local versions instead of being fetched from GitHub
    patterns = {}, -- For example {"folke"}
    fallback = false, -- Fallback to git when local plugin doesn't exist
  },
  install = {
    missing = true,
    colorscheme = { "tokyonight" },
  },
  ui = {
    size = { width = 0.8, height = 0.8 },
    wrap = true, -- wrap the lines in the ui
    -- The border to use for the UI window. Accepts same border values as |nvim_open_win()|.
    border = "none",
    icons = {
      cmd = " ",
      config = "",
      event = "",
      ft = " ",
      init = " ",
      import = " ",
      keys = " ",
      lazy = "󰒲 ",
      loaded = "●",
      not_loaded = "○",
      plugin = " ",
      runtime = " ",
      source = " ",
      start = "",
      task = "✔ ",
      list = {
        "●",
        "➜",
        "★",
        "‒",
      },
    },
    -- leave nil, to automatically select a browser depending on your OS.
    -- If you want to use a specific browser, you can define it here
    browser = nil, ---@type string?
    throttle = 20, -- how frequently should the ui process render events
    custom_keys = {
      -- To disable one of the defaults, set it to false

      -- open lazygit log
      ["<localleader>l"] = function(plugin)
        require("lazy.util").float_term({ "lazygit", "log" }, {
          cwd = plugin.dir,
        })
      end,

      -- open a terminal for the plugin dir
      ["<localleader>t"] = function(plugin)
        require("lazy.util").float_term(nil, {
          cwd = plugin.dir,
        })
      end,
    },
  },
  diff = {
    -- diff command <d> can be one of:
    -- * browser: opens the github compare view. Note that this is always mapped to <K> as well,
    --   so you can have a different command for diff <d>
    -- * git: will run git diff and open a buffer with filetype git
    -- * terminal_git: will open a pseudo terminal with git diff
    -- * diffview.nvim: will open Diffview to show the diff
    cmd = "git",
  },
  checker = {
    -- automatically check for plugin updates
    enabled = true,
    concurrency = nil, ---@type number? set to 1 to check for updates very slowly
    notify = true, -- get a notification when new updates are found
    frequency = 3600, -- check for updates every hour
  },
  change_detection = {
    -- automatically check for config file changes and reload the ui
    enabled = true,
    notify = true, -- get a notification when changes are found
  },
  performance = {
    cache = {
      enabled = true,
    },
    reset_packpath = true, -- reset the package path to improve startup time
    rtp = {
      reset = true, -- reset the runtime path to $VIMRUNTIME and your config directory
      ---@type string[]
      paths = {}, -- add any custom paths here that you want to includes in the rtp
      ---@type string[] list any plugins you want to disable here
      disabled_plugins = {
        -- "gzip",
        -- "matchit",
        -- "matchparen",
        -- "netrwPlugin",
        -- "tarPlugin",
        -- "tohtml",
        -- "tutor",
        -- "zipPlugin",
      },
    },
  },
  -- lazy can generate helptags from the headings in markdown readme files,
  -- so :help works even for plugins that don't have vim docs.
  -- when the readme opens with :help it will be correctly displayed as markdown
  readme = {
    enabled = true,
    root = vim.fn.stdpath("state") .. "/lazy/readme",
    files = { "README.md", "lua/**/README.md" },
    -- only generate markdown helptags for plugins that dont have docs
    skip_if_doc_exists = true,
  },
  state = vim.fn.stdpath("state") .. "/lazy/state.json", -- state info for checker and other things
}

return lazy.setup(plugins, opts)
