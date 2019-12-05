import React from 'react';
import { connect } from 'react-redux';
import { Button, List, ListItem, ListItemText, Link, Grid } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import { clearRepositories } from '../redux/actions';

const clearButtonStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
};

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
        },
        hrefLink: {
            textDecoration: 'none',
            color: theme.palette.primary.main
        }
    }),
);

function RepositoriesList({ username, repositories, clearRepositories }) {
    const classes = useStyles();

    return (
        <Grid container spacing={2} style={{ height: '100%' }}>
            <Grid item xs={8}>
                <Typography variant="h1" component="h2" color='primary'>
                    {username}
                </Typography>
            </Grid>
            
            <Grid item xs={4} style={clearButtonStyle}>
                <Button variant="contained" onClick={clearRepositories}>
                    Clear List
                </Button>
            </Grid>

            <Grid item xs={12}>
                <List component="nav" className={classes.root}>
                    {repositories.map(repo => (
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes.hrefLink}
                            key={repo.name}
                        >
                            <ListItem key={repo.name} divider button>
                                <ListItemText
                                    primary={repo.name}
                                    secondary={`Forks: ${repo.forks} - Stars: ${repo.stargazers_count}`}
                                />
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Grid>
        </Grid>         
    );
}

function selector(state) {
    return {
        username: state.username,
        repositories: state.repositories
    };
}

export default connect(selector, { clearRepositories })(RepositoriesList);

RepositoriesList.propTypes = {
    username: PropTypes.string,
    repositories: PropTypes.array.isRequired,
    clearRepositories: PropTypes.func.isRequired
};