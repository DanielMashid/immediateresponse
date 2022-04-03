import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import useStyles from './styles'


function UserDetails() {
    const classes = useStyles();

    return (
        <form align="center" className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField inputProps={{ style: {textAlign: 'right'} }} id="standard-number" placeholder="מספר ארגון" type="number"/>
                <div></div>
                <TextField inputProps={{ style: {textAlign: 'right'} }} required id="standard-required" placeholder="מספר זהות" type ="number"/>
                <div></div>
                <FormControlLabel
                    control={<Checkbox color="primary"/>}
                    label="זכור אותי"
                    labelPlacement="start"
                />

            </div>
        </form>
    );
}

export default UserDetails
