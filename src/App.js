import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import './App.css';

const outerTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: { main: '#FAAB1A' },
        secondary: { main: '#ffffff' }
    },
    typography: {
        fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(',')
    }
});

function App() {
    return (
        <ThemeProvider theme={outerTheme}>
            <div className="App">
                <header className="App-header">
                    Init
                </header>
            </div>

            <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
