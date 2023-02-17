Plug 'nvim-lualine/lualine.nvim'
Plug 'kyazdani42/nvim-web-devicons'


"----------lualine----------"
function SetupLualine()
lua<<EOF
  --local colors = {
    --blue   = '#80a0ff',
    --cyan   = '#79dac8',
    --black  = '#080808',
    --white  = '#c6c6c6',
    ---red    = '#ff5189',
    --violet = '#d183e8',
    --grey   = '#303030'
  --}

  require('lualine').setup {
    options = {
      icons_enabled = true,
      theme = 'auto',
      section_separators = { left = '', right = '' },
      --component_separators = { left = '', right = '' },
      component_separators = { left = '', right = '' },
      disabled_filetypes = {
        statusline = {},
        winbar = {},
      },
      ignore_focus = {},
      always_divide_middle = true,
      globalstatus = true,
      refresh = {
        statusline = 1000,
        tabline = 1000,
        winbar = 1000,
      }
    },
    sections = {
      lualine_a = {
        { 
          'mode', 
          icons_enabled = true, -- Enables the display of icons alongside the component.
          -- Defines the icon to be displayed in front of the component.
          -- Can be string|table
          -- As table it must contain the icon as first entry and can use
          -- color option to custom color the icon. Example:
          -- {'branch', icon = ''} / {'branch', icon = {'', color={fg='green'}}}
          -- icon position can also be set to the right side from table. Example:
          -- {'branch', icon = {'', align='right', color={fg='green'}}}
          icon = nil,


          separator = { left = '',right ='' },
          -- Determines what separator to use for the component.
          -- Note:
          --  When a string is provided it's treated as component_separator.
          --  When a table is provided it's treated as section_separator.
          --  Passing an empty string disables the separator.
          --
          -- These options can be used to set colored separators
          -- around a component.
          --
          -- The options need to be set as such:
          --   separator = { left = '', right = ''}
          --
          -- Where left will be placed on left side of component,
          -- and right will be placed on its right.
          cond = nil,           
          -- Condition function, the component is loaded when the function returns `true`.

          -- Defines a custom color for the component:
          --
          -- 'highlight_group_name' | { fg = '#rrggbb'|cterm_value(0-255)|'color_name(red)', bg= '#rrggbb', gui='style' } | function
          -- Note:
          --  '|' is synonymous with 'or', meaning a different acceptable format for that placeholder.
          -- color function has to return one of other color types ('highlight_group_name' | { fg = '#rrggbb'|cterm_value(0-255)|'color_name(red)', bg= '#rrggbb', gui='style' })
          -- color functions can be used to have different colors based on state as shown below.
          --
          -- Examples:
          --   color = { fg = '#ffaa88', bg = 'grey', gui='italic,bold' },
          --   color = { fg = 204 }   -- When fg/bg are omitted, they default to the your theme's fg/bg.
          --   color = 'WarningMsg'   -- Highlight groups can also be used.
          --   color = function(section)
          --      return { fg = vim.bo.modified and '#aa3355' or '#33aa88' }
          --   end,
          color = nil, -- The default is your theme's color for that section and mode.

          -- Specify what type a component is, if omitted, lualine will guess it for you.
          --
          -- Available types are:
          --   [format: type_name(example)], mod(branch/filename),
          --   stl(%f/%m), var(g:coc_status/bo:modifiable),
          --   lua_expr(lua expressions), vim_fun(viml function name)
          --
          -- Note:
          -- lua_expr is short for lua-expression and vim_fun is short for vim-function.
          type = nil,

          padding = 1, 
          -- Adds padding to the left and right of components.
          -- Padding can be specified to left or right independently, e.g.:
          --   padding = { left = left_padding, right = right_padding }

          fmt = nil,   
          -- Format function, formats the component's output.
          -- This function receives two arguments:
          -- - string that is going to be displayed and
          --   that can be changed, enhanced and etc.
          -- - context object with information you might
          --   need. E.g. tabnr if used with tabs.
          on_click = nil, 
          -- takes a function that is called when component is clicked with mouse.
          -- the function receives several arguments
          -- - number of clicks in case of multiple clicks
          -- - mouse button used (l(left)/r(right)/m(middle)/...)
          -- - modifiers pressed (s(shift)/c(ctrl)/a(alt)/m(meta)...)
        },
      },
      --lualine_b = {'buffers'},
      lualine_b = {
        {'branch'}, 
        {
          'diff',
          colored = true, -- Displays a colored diff status if set to true
          diff_color = {
            -- Same color values as the general color option can be used here.
            added    = 'DiffAdd',    -- Changes the diff's added color
            modified = 'DiffChange', -- Changes the diff's modified color
            removed  = 'DiffDelete', -- Changes the diff's removed color you
          },
          symbols = {added = '+', modified = '~', removed = '-'}, -- Changes the symbols used by the diff.
          source = nil, 
          -- A function that works as a data source for diff.
          -- It must return a table as such:
          --   { added = add_count, modified = modified_count, removed = removed_count }
          -- or nil on failure. count <= 0 won't be displayed.
        }, 
        
        {
          'diagnostics',
          -- Table of diagnostic sources, available sources are:
          -- 'nvim_lsp', 'nvim_diagnostic', 'nvim_workspace_diagnostic', 'coc', 'ale', 'vim_lsp'.
          -- or a function that returns a table as such:
          -- { error=error_cnt, warn=warn_cnt, info=info_cnt, hint=hint_cnt }
          sources = { 'nvim_diagnostic', 'coc' },

          -- Displays diagnostics for the defined severity types
          sections = { 'error', 'warn', 'info', 'hint' },

          diagnostics_color = {
            -- Same values as the general color option can be used here.
            error = 'DiagnosticError', -- Changes diagnostics' error color.
            warn  = 'DiagnosticWarn',  -- Changes diagnostics' warn color.
            info  = 'DiagnosticInfo',  -- Changes diagnostics' info color.
            hint  = 'DiagnosticHint',  -- Changes diagnostics' hint color.
          },
          symbols = {error = 'E', warn = 'W', info = 'I', hint = 'H'},
          colored = true,           -- Displays diagnostics status in color if set to true.
          update_in_insert = false, -- Update diagnostics in insert mode.
          always_visible = false,   -- Show diagnostics even if there are none.
        },
      },
      lualine_c = {
        {
          'filename',
          file_status = true,      -- Displays file status (readonly status, modified status)
          newfile_status = false,  -- Display new file status (new file means no write after created)
          path = 0,            
          separator = {left ='', right = '' }, 
          -- 0: Just the filename
          -- 1: Relative path
          -- 2: Absolute path
          -- 3: Absolute path, with tilde as the home directory

          shorting_target = 40,    
          -- Shortens path to leave 40 spaces in the window
          -- for other components. (terrible name, any suggestions?)
          symbols = {
            modified = '[+]',      -- Text to show when the file is modified.
            readonly = '',        -- Text to show when the file is non-modifiable or readonly.
            unnamed = '[No Name]', -- Text to show for unnamed buffers.
            newfile = '[New]',     -- Text to show for newly created file before first write
          },
        }
      },

      lualine_x = {},
      --lualine_x = {'encoding', 'fileformat', 'filetype'},
      lualine_y = {},
      lualine_z = {
        { 
          'location', 
          separator = {left ='', right = '' }, 
          left_padding = 2 
        },
      },
    },
    inactive_sections = {
      lualine_a = {},
      lualine_b = {},
      lualine_c = {},
      lualine_x = {},
      lualine_y = {},
      lualine_z = {}
    },
    --tabline = {},
    --winbar = {},
    --inactive_winbar = {},
    --extensions = {}
  }
EOF
endfunction


" Run the lualine setup options when neovim loaded
augroup LualineOverrides
  autocmd!
  autocmd User PlugLoaded call SetupLualine()
augroup END
