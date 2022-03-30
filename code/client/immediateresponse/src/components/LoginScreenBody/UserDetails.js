import React from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {Checkbox, FormControlLabel} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',


        },
    },
}));

function UserDetails() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField id="standard-number" label="מספר ארגון" type="number"/>
                <TextField required id="standard-required" label="מספר זהות" InputLabelProps={{
                    shrink: true,
                }}
                />
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
