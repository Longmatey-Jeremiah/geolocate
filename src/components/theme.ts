import { extendTheme } from 'native-base';

export const colors = {
  brand: {
    100: '#ffffff',
    200: '#E9F0F5',
    300: '#A2B3BF',
    400: '#000',
    500: '#C3D7E5',
  },
  primary: {
    100: '#000000',
    200: '#112951',
  },
  secondary: {
    100: '#5C6C87',
    200: '#6C7780',
    300: '#B8CBD9',
    400: 'rgba(255, 255, 255, 0.7)',
    500: '#F5FAFE',
    600: '#C4C9CC',
    700: 'rgba(233, 240, 245, 0.6)',
    800: '#CEDCE5',
    900: '#738899',
  },
  success: {
    100: '#49BD69',
  },
};

const components = {
  Button: {
    baseStyle: {
      rounded: '6px',
    },
  },
  Text: {
    baseStyle: {
      color: 'primary.200',
      lineHeight: '28px',
    },
  },
};

export const theme = extendTheme({ colors, components });
