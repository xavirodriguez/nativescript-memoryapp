/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{css,xml,html,vue,svelte,ts,tsx}'],
  // use the .ns-dark class to control dark mode (applied by NativeScript) - since 'media' (default) is not supported.
  darkMode: ['class', '.ns-dark'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra para tarjetas
      },
      borderRadius: {
        card: '8px', // Bordes redondeados para tarjetas
      },
      spacing: {
        'progress-bar-height': '8px', // Altura de barras de progreso
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'], // Fuente para el cuerpo
        quicksand: ['Quicksand', 'sans-serif'], // Fuente para encabezados
      },
      colors: {
        primaryBg: '#F8F3ED', // Blanco crema
        secondaryBg: '#D5E8D4', // Verde salvia claro
        accentBlue: '#6B8C9E', // Azul piedra
        accentBrown: '#A58868', // Marrón tierra suave
        detailGray: '#D1CBC3', // Gris cálido
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // disables browser-specific resets
  },
};
