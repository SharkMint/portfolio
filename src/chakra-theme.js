import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    50: '#eaf6fb',
    100: '#cfeff6',
    200: '#9be1ef',
    300: '#67d3e8',
    400: '#33c6e1',
    500: '#1C658C',
    600: '#155060',
    700: '#0e3a43',
    800: '#072526',
    900: '#001213',
  }
};

const fonts = {
  heading: "Poppins, sans-serif",
  body: "Poppins, sans-serif",
};

const theme = extendTheme({ colors, fonts });

export default theme;
