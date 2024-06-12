import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: `'Roboto', sans-serif`,
    },

    palette: {
        primary: {
            main: '#00e5bc',
        },
        secondary: {
            main: '#D31B2C',
            contrastText: '#fff',
        },
        info: {
            main: '#76767A',
            contrastText: 'transparent',
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1360,
            xl: 1600,
        },
    },

    spacing: 4,
});
