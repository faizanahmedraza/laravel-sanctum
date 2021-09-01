import React from 'react';
import {Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const AppBar = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                   Home
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

    );
}

export default AppBar;