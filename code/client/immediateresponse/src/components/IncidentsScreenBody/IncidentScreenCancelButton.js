import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
        color: "black",
        backgroundColor: "orangered",
        padding: '0 30px',
        marginTop: "40%",
        marginLeft: "35%"
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
                ביטול אירוע
            </Button>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
        </div>
    );
}

export default CancelButton;

