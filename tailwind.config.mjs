/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
          secondary: '#0a0a0a',
          tertiary: '#1a1a1a',
        },
        text: {
          primary: '#00ff00',
          secondary: '#cccccc',
          muted: '#666666',
        },
        accent: {
          primary: '#00ff00',
          secondary: '#ffffff',
          warning: '#ffff00',
          danger: '#ff0000',
        },
        border: {
          primary: '#333333',
          secondary: '#1a1a1a',
        }
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'Courier New', 'monospace'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#cccccc',
            '--tw-prose-headings': '#00ff00',
            '--tw-prose-links': '#00ff00',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-code': '#00ff00',
            '--tw-prose-pre-bg': '#0a0a0a',
            '--tw-prose-pre-code': '#00ff00',
            '--tw-prose-quotes': '#666666',
            '--tw-prose-hr': '#333333',
          }
        }
      }
    },
  },
  plugins: [],
}
