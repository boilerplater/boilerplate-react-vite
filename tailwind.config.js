const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './index.html',
    './tailwind.safelist.txt'
  ],
  darkMode: 'class', // or 'media' or 'class'
  important: false,
  theme: {
    extend: {
      colors: {
        'red': {
          // ...colors.red,
          DEFAULT  : '#f44336',
          '50'     : '#ffebee',
          '100'    : '#ffcdd2',
          '200'    : '#ef9a9a',
          '300'    : '#e57373',
          '400'    : '#ef5350',
          '500'    : '#f44336',
          '600'    : '#e53935',
          '700'    : '#d32f2f',
          '800'    : '#c62828',
          '900'    : '#b71c1c',
        },
        'pink': {
          // ...colors.pink,
          DEFAULT  : '#e91e63',
          '50'     : '#fce4ec',
          '100'    : '#f8bbd0',
          '200'    : '#f48fb1',
          '300'    : '#f06292',
          '400'    : '#ec407a',
          '500'    : '#e91e63',
          '600'    : '#d81b60',
          '700'    : '#c2185b',
          '800'    : '#ad1457',
          '900'    : '#880e4f',
        },
        'purple': {
          // ...colors.purple,
          DEFAULT  : '#9c27b0',
          '50'     : '#f3e5f5',
          '100'    : '#e1bee7',
          '200'    : '#ce93d8',
          '300'    : '#ba68c8',
          '400'    : '#ab47bc',
          '500'    : '#9c27b0',
          '600'    : '#8e24aa',
          '700'    : '#7b1fa2',
          '800'    : '#6a1b9a',
          '900'    : '#4a148c',
        },
        'indigo': {
          // ...colors.indigo,
          DEFAULT  : '#3f51b5',
          '50'     : '#e8eaf6',
          '100'    : '#c5cae9',
          '200'    : '#9fa8da',
          '300'    : '#7986cb',
          '400'    : '#5c6bc0',
          '500'    : '#3f51b5',
          '600'    : '#3949ab',
          '700'    : '#303f9f',
          '800'    : '#283593',
          '900'    : '#1a237e',
        },
        'blue': {
          // ...colors.blue,
          DEFAULT  : '#2196f3',
          '50'     : '#e3f2fd',
          '100'    : '#bbdefb',
          '200'    : '#90caf9',
          '300'    : '#64b5f6',
          '400'    : '#42a5f5',
          '500'    : '#2196f3',
          '600'    : '#1e88e5',
          '700'    : '#1976d2',
          '800'    : '#1565c0',
          '900'    : '#0d47a1',
        },
        'cyan': {
          DEFAULT  : '#00BCD4',
          '50'     : '#E0F7FA',
          '100'    : '#B2EBF2',
          '200'    : '#80DEEA',
          '300'    : '#4DD0E1',
          '400'    : '#26C6DA',
          '500'    : '#00BCD4',
          '600'    : '#00ACC1',
          '700'    : '#0097A7',
          '800'    : '#00838F',
          '900'    : '#006064',
        },
        'green': {
          // ...colors.green,
          DEFAULT  : '#4CAF50',
          '50'     : '#E8F5E9',
          '100'    : '#C8E6C9',
          '200'    : '#A5D6A7',
          '300'    : '#81C784',
          '400'    : '#66BB6A',
          '500'    : '#4CAF50',
          '600'    : '#43A047',
          '700'    : '#388E3C',
          '800'    : '#2E7D32',
          '900'    : '#1B5E20',
        },
        'yellow': {
          // ...colors.yellow,
          DEFAULT  : '#FFEB3B',
          '50'     : '#FFFDE7',
          '100'    : '#FFF9C4',
          '200'    : '#FFF59D',
          '300'    : '#FFF176',
          '400'    : '#FFEE58',
          '500'    : '#FFEB3B',
          '600'    : '#FDD835',
          '700'    : '#FBC02D',
          '800'    : '#F9A825',
          '900'    : '#F57F17',
        },
        'orange': {
          // ...colors.orange,
          DEFAULT  : '#FF9800',
          '50'     : '#FFF3E0',
          '100'    : '#FFE0B2',
          '200'    : '#FFCC80',
          '300'    : '#FFB74D',
          '400'    : '#FFA726',
          '500'    : '#FF9800',
          '600'    : '#FB8C00',
          '700'    : '#F57C00',
          '800'    : '#EF6C00',
          '900'    : '#E65100',
        },
        'gray': {
          ...colors.slate,
          DEFAULT  : '#64748B',
        },

        // Brand Colors
        'dark'          : '#343a40',
        'light'         : '#f8f9fa',

        // Social Colors
        'facebook'      : '#3b5998',
        'google'        : '#dd4b39',
        'linkedin'      : '#007bb6',
        'twitter'       : '#55acee',
      },
      fontFamily: {
        'base'    : ['Manrope', 'Roboto', '"Segoe UI"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'comics'  : ['Bangers', 'cursive'],
        'cursive' : ['Cookie', 'cursive'],
        'brand'   : ['"Londrina Solid"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        'display' : ['Poppins', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        // 'mono' : ['source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
        'rounded' : ['Quicksand', 'Calibri', 'Candara', 'Segoe', 'Optima', 'Arial', 'sans-serif'],
        'sans'    : ['Manrope', 'Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        'serif'   : ['"Roboto Slab"', 'Lucida', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      inset: {
        '-9999px': '-9999px',
      },
      margin: {
        'full': '100%',
      },
      minHeight: {
        'inherit': 'inherit'
      },
      minWidth: {
        '40': '10rem',
      },
      padding: {
        'full': '100%',
      },
      transitionDuration: {
        '35': '35ms',
      },
      transitionProperty: {
        'height' : 'height',
        'spacing': 'margin, padding',
        'width'  : 'width',
      },
      zIndex: {
        '1'   : 1,
        '2'   : 2,
        '1000': 1000, // Dropdown
        '1020': 1020, // Sticky
        '1030': 1030, // Fixed
        '1040': 1040, // Modal Backdrop
        '1050': 1050, // Offcanvas
        '1060': 1060, // Modal
        '1070': 1070, // Popover
        '1080': 1080, // Tooltip
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}
