import React, { useState } from 'react';
import { Paper, TextField, InputAdornment, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            padding: theme.spacing(3, 2),
            justifyContent: 'center'
        },
        inputTypeSearch: {
            color: '#f00'
        }
    }),
);

export default function TextInputCard({submitAction}) {
    const classes = useStyles();

    const [value, setValue] = useState('');

    const handleChange = event => setValue(event.target.value);
    const submitWrapper = event => {
        event.preventDefault();
        submitAction();
    };

    const inputButtons = (
        <InputAdornment position="end">
            <Button onClick={() => setValue('')}>
                Clear
            </Button>
            <Button color="primary" type="submit">
                Search
            </Button>
        </InputAdornment>
    );

    return (
        <Paper className={classes.root}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitWrapper}>
                <TextField
                    fullWidth 
                    autoFocus
                    value={value}
                    onChange={handleChange}
                    color= 'primary'
                    variant="outlined"
                    label="GitHub Username"
                    placeholder="https://github.com/user"
                    InputProps={{
                        endAdornment: inputButtons
                    }}
                />
            </form>
        </Paper>
    );   
}

TextInputCard.propTypes = {
    submitAction: PropTypes.func.isRequired
};