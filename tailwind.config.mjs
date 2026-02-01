/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0d1117',
          secondary: '#161b22',
          tertiary: '#21262d',
        },
        text: {
          primary: '#e6edf3',
          secondary: '#8b949e',
          muted: '#6e7681',
        },
        accent: {
          primary: '#58a6ff',
          secondary: '#3fb950',
          warning: '#d29922',
          danger: '#f85149',
        },
        border: {
          primary: '#30363d',
          secondary: '#21262d',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#e6edf3',
            '--tw-prose-headings': '#e6edf3',
            '--tw-prose-links': '#58a6ff',
            '--tw-prose-bold': '#e6edf3',
            '--tw-prose-code': '#e6edf3',
            '--tw-prose-pre-bg': '#161b22',
            '--tw-prose-pre-code': '#e6edf3',
            '--tw-prose-quotes': '#8b949e',
            '--tw-prose-hr': '#30363d',
          }
        }
      }
    },
  },
  plugins: [],
}
