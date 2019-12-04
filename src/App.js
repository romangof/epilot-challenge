import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { fetchRepositories } from './redux/actions';

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

function App({fetchRepositories}) {
    useEffect(() => {
        console.log(11111);
        
        fetchRepositories();
    }, []);

    // fetchRepositories();

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
    
export default connect(null, {fetchRepositories})(App);

App.propTypes = {
    fetchRepositories: PropTypes.func.isRequired
};