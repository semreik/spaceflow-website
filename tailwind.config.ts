import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        muted: 'var(--muted)',
        text: 'var(--text)',
        subtle: 'var(--subtle)',
        accent: 'var(--accent)',
        'accent-contrast': 'var(--accent-contrast)',
        success: 'var(--success)',
        warn: 'var(--warn)',
        danger: 'var(--danger)',
        glass: 'var(--glass)',
        'glass-border': 'var(--glass-border)',
        'glass-hover': 'var(--glass-hover)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        '1': 'var(--shadow-1)',
        '2': 'var(--shadow-2)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '5': 'var(--space-5)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '10': 'var(--space-10)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
        '20': 'var(--space-20)',
        '24': 'var(--space-24)',
        '32': 'var(--space-32)',
      },
    },
  },
  plugins: [],
}

export default config
