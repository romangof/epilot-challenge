import React from 'react';
import { connect } from 'react-redux';
import { CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { fetchRepositories } from './redux/actions';
import TextInputCard from './components/TextInputCard';

import './App.css';

const API = 'https://api.github.com';

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

function App({loading, repositories, fetchRepositories}) {
    return (
        <ThemeProvider theme={outerTheme}>
            <Container className='base-container'>
                {!loading 
                    ? <TextInputCard submitAction={user => fetchRepositories({url: `${API}/users/${user}/repos`, user})} />
                    : <p>Loading</p>
                }
            </Container>

            <CssBaseline />
        </ThemeProvider>
    );
}

function selector(state) {
    return {
        loading: state.loading,
        repositories: state.repositories
    };
}
    
export default connect(selector, {fetchRepositories})(App);

App.propTypes = {
    repositories: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    fetchRepositories: PropTypes.func.isRequired
};