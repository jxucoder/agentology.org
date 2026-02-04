/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Apple-inspired light theme
        bg: {
          primary: '#ffffff',
          secondary: '#f5f5f7',
          tertiary: '#fbfbfd',
          elevated: '#ffffff',
        },
        text: {
          primary: '#1d1d1f',
          secondary: '#6e6e73',
          muted: '#86868b',
        },
        accent: {
          blue: '#0071e3',
          purple: '#bf4800',
          green: '#00a852',
          red: '#ff3b30',
          orange: '#ff9500',
        },
        border: {
          primary: '#d2d2d7',
          secondary: '#e8e8ed',
          light: 'rgba(0, 0, 0, 0.04)',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'SF Pro Display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'sans-serif'],
        mono: ['SF Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-xl': ['80px', { lineHeight: '1.05', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-lg': ['56px', { lineHeight: '1.07', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-md': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-sm': ['40px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline': ['32px', { lineHeight: '1.125', letterSpacing: '0', fontWeight: '600' }],
        'title-lg': ['28px', { lineHeight: '1.14', letterSpacing: '.007em', fontWeight: '600' }],
        'title': ['24px', { lineHeight: '1.16', letterSpacing: '.009em', fontWeight: '600' }],
        'title-sm': ['21px', { lineHeight: '1.19', letterSpacing: '.011em', fontWeight: '600' }],
        'body-lg': ['21px', { lineHeight: '1.38', letterSpacing: '.011em', fontWeight: '400' }],
        'body': ['17px', { lineHeight: '1.47', letterSpacing: '-0.022em', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.42', letterSpacing: '-0.016em', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.33', letterSpacing: '0', fontWeight: '400' }],
      },
      boxShadow: {
        'apple-sm': '0 1px 3px rgba(0, 0, 0, 0.08)',
        'apple': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'apple-lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'apple-card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 0 1px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'apple-sm': '8px',
        'apple': '12px',
        'apple-lg': '18px',
        'apple-xl': '22px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'apple': '980px',
        'apple-lg': '1200px',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.6s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1d1d1f',
            '--tw-prose-headings': '#1d1d1f',
            '--tw-prose-links': '#0071e3',
            '--tw-prose-bold': '#1d1d1f',
            '--tw-prose-code': '#1d1d1f',
            '--tw-prose-pre-bg': '#f5f5f7',
            '--tw-prose-pre-code': '#1d1d1f',
            '--tw-prose-quotes': '#6e6e73',
            '--tw-prose-hr': '#d2d2d7',
          }
        }
      },
    },
  },
  plugins: [],
}
