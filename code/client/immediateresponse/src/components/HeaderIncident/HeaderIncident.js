import {Typography} from "@mui/material";
import React from "react";
import {AppBar, IconButton, Toolbar,} from "@material-ui/core";
import useStyles from './styles'

const HeaderLoginFunc = () => {
    const classes = useStyles;

    return (
        <AppBar position="static" style={{ background: '#b21800' ,color : "black",alignItems: 'center'}}>
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    תגובה מיידית
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default HeaderLoginFunc
