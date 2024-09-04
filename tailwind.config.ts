import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grey_tone: '#A1B1CB',
        lilac_tone: '#BCA5FF',
        yellow_tone: '#FFC907',
        grey_tone2: '#AFAFAF',
        lilac_tone2: '#5E47A1',
        offWhite: '#E3E3E3',
      }
    },
  },
  plugins: [
    function ({ addUtilities }:any) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none', /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none', /* Safari and Chrome */
          },
        },
      });
    },
  ],
}
export default config
