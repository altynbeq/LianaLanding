module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa', 'sans-serif'],
      },
      colors: {
        // Add or override colors as needed
        black: '#000', // You can use Tailwind's default black or specify your own hex, rgb, etc.
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100px)' },  // Adjust this as needed
          '100%': { transform: 'translateX(0)' },
        },
        shine: {
          '0%': {
            backgroundPosition: '-100%',
          },
          '100%': {
            backgroundPosition: '100%',
          },
        }
      },
      animation: {
        move: 'move 2s infinite ease-in-out',
        shine: 'shine 1.5s infinite',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
        addComponents({
            '.subtle-border': {
                backgroundColor: theme('colors.white'),
                border: '1px solid',
                borderColor: theme('colors.gray.200'),
                borderRadius: theme('borderRadius.2xl'),
                boxShadow: theme('boxShadow.custom'),
                transition: 'box-shadow 300ms ease',
                '&:hover': {
                    boxShadow: theme('boxShadow.custom-hover'),
                },
            },
        });
    },
  ],
};
