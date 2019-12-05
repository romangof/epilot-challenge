import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { fetchRepositories } from './redux/actions';
import TextInputCard from './components/TextInputCard';

import './App.css';

// const API = 'https://api.github.com';

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

function App({repositories, fetchRepositories}) {
    useEffect(() => {
        fetchRepositories();
    }, []);

    return (
        <ThemeProvider theme={outerTheme}>
            {/* {console.log(555, repositories)} */}

            <Container className='base-container'>
                <TextInputCard submitAction={() => console.log(3333)} />
            </Container>

            <CssBaseline />
        </ThemeProvider>
    );
}

function selector(state) {
    return {
        repositories: state.repositories
    };
}
    
export default connect(selector, {fetchRepositories})(App);

App.propTypes = {
    repositories: PropTypes.array,
    fetchRepositories: PropTypes.func.isRequired
};