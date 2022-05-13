import React from 'react';
import TextField from '@material-ui/core/TextField';
import {Checkbox, FormControlLabel} from "@material-ui/core";
import useStyles from './styles'


function UserDetails() {
    const classes = useStyles();

    return (
        <form align="center" noValidate autoComplete="off">
            <div className='form-container'>
                <input className="input-org" placeholder=":מספר ארגון" type="number" />
                <input className="input-id" placeholder=":מספר זהות" type="number" />

                {/*<TextField className="input-org" inputProps={{ style: {textAlign: 'right'} }} id="standard-number" placeholder="מספר ארגון" type="number"/>*/}
                {/*<TextField className="input-id"  inputProps={{ style: {textAlign: 'right'} }} required id="standard-required" placeholder="מספר זהות" type ="number"/>*/}
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
