module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {

      'sm': {'max': '450px'},
      
    },
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4A90E2, #0f0f0f)',
      },
      
    },
    colors: {
      custom1: '#424242',
      custom2: '#FFFFFF', 
      custom3: '#F5F5F5', 
      custom4: '#424242', 
      custom5: "#E3F2FD",
      custom6: "#000000",
      custom7: "#007BFF",
    },
  },
  plugins: [],
}
