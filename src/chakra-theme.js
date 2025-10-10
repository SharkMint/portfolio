import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: '#e6fffa',
    100: '#bffaf0',
    200: '#86efac',
    300: '#34d399',
    400: '#10b981',
    500: '#059669',
    600: '#047857',
    700: '#065f46',
    800: '#064e3b',
    900: '#04291f',
  },
  brand: {
    50: '#f0f9ff',
    100: '#e0f2ff',
    200: '#bfe9ff',
    300: '#99d9ff',
    400: '#66c7ff',
    500: '#33b3ff',
    600: '#0099e6',
    700: '#0077b3',
    800: '#005680',
    900: '#00334d',
  }
};

const fonts = {
  heading: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
  body: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
};

const semanticTokens = {
  colors: {
    'bg-default': 'gray.900',
    'bg-surface': 'whiteAlpha.50',
    'text-default': 'whiteAlpha.900',
    'muted': 'whiteAlpha.700',
    'accent': 'primary.400',
  }
};

const components = {
  Button: {
    baseStyle: {
      borderRadius: 'md',
      fontWeight: 'semibold',
    },
    variants: {
      solid: (props) => ({
        bg: props.colorMode === 'dark' ? 'primary.500' : 'primary.500',
        color: 'white',
        _hover: { opacity: 0.95, transform: 'translateY(-1px)' },
      }),
      ghost: {
        bg: 'transparent',
        _hover: { bg: 'whiteAlpha.50' },
      }
    },
    defaultProps: {
      colorScheme: 'primary',
    }
  },
  Heading: {
    baseStyle: {
      color: 'text-default',
      fontWeight: 700,
      lineHeight: 'short',
    }
  },
  Link: {
    baseStyle: {
      color: 'accent',
      _hover: { textDecoration: 'none', opacity: 0.9 }
    }
  }
};

const styles = {
  global: {
    'html, body': {
      bg: 'gray.900',
      color: 'whiteAlpha.900',
      height: '100%'
    },
    a: {
      _hover: { textDecoration: 'none' }
    }
  }
};

const theme = extendTheme({ colors, fonts, semanticTokens, components, styles });

export default theme;
