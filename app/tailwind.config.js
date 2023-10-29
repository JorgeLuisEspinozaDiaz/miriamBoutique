/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#6542C9',
            rose: '#F6DCFF',
            dark: '#462653',
            purple: '#A154C4',
            black: '#1D1D1D',
            lead: '#606060',
         },
         fontFamily: {
            alegreya: ['var(--font-alegreya)'],
            roboto: ['var(--font-roboto)'],
            FiraSans: ['var(--font-FiraSans)'],
         },
         screens: {
            phone: '414px',
            phonelg: '568px',
            tablet: '768px',
            tabletlg: '960px',
            tabletxl: '1024px',
            laptop: '1200px',
            laptoplg: '1400px',
            desktop: '1700px',
         },
      },
   },
   plugins: [],
}
