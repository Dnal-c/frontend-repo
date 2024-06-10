import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider, createTheme} from '@mui/material'
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const theme = createTheme({
    typography: {
        fontFamily: 'Golos UI'
    },
    palette: {
        primary: {
            main: '#333333'
        },
        secondary: {
            main: '#D31B2C',
            contrastText: '#fff',
        },
        info: {
            main: '#76767A',
            contrastText: 'transparent'
        }
    }
})

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
)