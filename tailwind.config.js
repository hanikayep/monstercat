/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#50a584"
      },

      fontSize: {
        gigantic:'clamp(2rem, 5vw, 5rem)',
        huge: 'clamp(2rem, 4vw, 3rem)',
        head2: 'clamp(1.5rem, 3vw, 2rem)',
        head3: 'clamp(1.3rem, 3vw, 3rem)',
        head4: 'clamp(1.2rem, 2vw, 1.5rem)',
      },

      fontFamily: {
        montserrat : ['Montserrat', 'san-serif'],
        monument: ['Monument Extended', 'sans serif'],
        monument_bold: ['Monument Extended Ultrabold', 'sans serif']
      }
    },

    container: {
      center: true,
      // padding: {
      //   DEFAULT: '1rem',
      //   'sm': '2rem',
      //   'lg': '4rem',
      //   'xl': '10px',
      //   '2xl': '10px'
      // },
      screens: {
        'sm': '640px',  
        'md': '768px',  
        'lg': '1024px',  
        'xl': '1280px',  
        '2xl': '1536px',
      }
    }
  },
  plugins: [],
}
