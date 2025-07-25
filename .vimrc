" display line numbers on the sidebar
set number

" Display current line and column on the bottom bar
set ruler

" Set tabs to be 2 spaces wide
set tabstop=2
set shiftwidth=2

" Automatically indent code when going to the next line
set autoindent

" Expand tab characters to be spaces.
set expandtab

" highlight search results
set hlsearch

" start search without having to submit
set incsearch

" allow mouse for pasting etc
set mouse=a

"Keep 7 lines visible at the top and bottom of the screen when scrolling
set so=7

" use n and N to center the next search result on the screen
nmap n nzz
nmap N Nzz

" show whitespace
set list
set listchars=tab:>.,trail:.

" Flash on the screen instead of making the bell sound
set noerrorbells
set visualbell

" Highlight 80th column
set colorcolumn=80

" Use tabs for indentation in Makefiles, default settings elsewhere
autocmd FileType make setlocal noexpandtab

filetype on
syntax on
