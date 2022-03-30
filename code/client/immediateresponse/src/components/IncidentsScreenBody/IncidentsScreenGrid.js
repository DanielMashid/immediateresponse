import React from "react";
import './IncidentsScreenGrid.css'
import {Button, ButtonGroup} from "@material-ui/core";

function SimpleText() {
    return (
        <div>
            <ButtonGroup className="mainText3" orientation="vertical" variant="contained" size="large">
                <Button>שפך</Button>
                <Button>אירוע ביטחוני</Button>
                <Button>בטיחות פגיעה באדם</Button>
            </ButtonGroup>
            <h1></h1>
            <ButtonGroup className="mainText3" orientation="vertical" variant="contained" size="large">
                <Button>שריפה</Button>
                <Button>חומר מעשן</Button>
                <Button>בטיחות פגיעה ברכוש</Button>
            </ButtonGroup>
        </div>
    );
}

export default SimpleText

