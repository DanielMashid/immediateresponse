import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3),
        color: "black",
        backgroundColor: "red",
        fontWeight:"bold",

    },
}));

function CancelButton() {
    const classes = useStyles();

    return (
        <div>
            <Button
                variant="contained"
                className={classes.button}
                startIcon={<DeleteIcon/>}

            >
                סיום אירוע
            </Button>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        </div>
    );
}

export default CancelButton;

