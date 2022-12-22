import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      '50': '#F1E9FC',
      '100': '#D8C0F6',
      '200': '#BF98F1',
      '300': '#A670EB',
      '400': '#8D47E6',
      '500': '#741FE0',
      '600': '#5D19B3',
      '700': '#461287',
      '800': '#2F0C5A',
      '900': '#17062D',
    },
  },
  fonts: {
    heading: `'Mulish', sans-serif`,
    body: `'Mulish', sans-serif`,
  },
});
