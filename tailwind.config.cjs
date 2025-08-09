module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        neon: '#39FF14',
        deep: '#0b1020',
        glass: 'rgba(255,255,255,0.06)'
      },
      boxShadow: {
        'neon-sm': '0 0 8px rgba(57,255,20,0.08), inset 0 -2px 10px rgba(0,0,0,0.6)'
      }
    }
  },
  plugins: []
}