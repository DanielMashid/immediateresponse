import React from "react";
import './IncidentsScreenGrid.css'
import {Button, ButtonGroup} from "@material-ui/core";

function SimpleText() {
    return (
        <section>
        <div className="mainText3">
            <ButtonGroup className="mainText5">
                <Button>שפך</Button>
                <Button>אירוע ביטחוני</Button>
                <Button>בטיחות פגיעה באדם</Button>
            </ButtonGroup>
        </div>
            <div className="mainText4">
            <ButtonGroup className="mainText5">
                <Button>שריפה</Button>
                <Button>חומר מעשן</Button>
                <Button>בטיחות פגיעה ברכוש</Button>
            </ButtonGroup>
        </div>
        </section>
    );
}

export default SimpleText

