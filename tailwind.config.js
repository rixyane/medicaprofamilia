module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    spacing: {
      auto: 'auto',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
    },
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      md: '1.25rem',
      lg: '1.5rem',
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
    extend: {
      colors: {
        light: 'var(--baby-blue)',
      },
    },
  },
  variants: {},
  plugins: [],
};
