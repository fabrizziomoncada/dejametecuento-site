module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    borderColor: (theme) => ({
      DEFAULT: theme('var(--primary-2)', 'currentColor'),
      primary: 'var(--primary-1)',
      secondary: 'var(--primary-2)',
      tertiary: 'var(--secondary)',
      danger: 'var(--red)',
      succes: 'var(--green)',
    }),
    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    extend: {
      lineHeight: {
        article: '1.675',
      },
      inset: {
        '1/2': '50%',
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.3333%',
        '2/3': '66.6667%',
        '1/4': '25%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        full: '100%',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        accent: 'var(--text-accent)',
      },
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        blue: 'var(--blue)',
      },
      screens: {
        standalone: {
          raw: '(display-mode: standalone)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
