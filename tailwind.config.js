
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        blue:{
          dark: '#003C56',
          medium: '#0085A3',
          medium2: '#005A75',
          light: '#2CB0F0'
        },
        yellow: '#E9DAAF',
        orange: '#D9A317'
      }
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [],
}
