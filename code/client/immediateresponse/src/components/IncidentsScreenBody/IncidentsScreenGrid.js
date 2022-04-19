import React from "react";
import './IncidentsScreenGrid.css'
import {Button, ButtonGroup} from "@material-ui/core";

function SimpleText() {

    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handlerLocationError);
            printState()
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }
    const getCoordinates = (position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)

    }
    const handlerLocationError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            default:
                alert("An unknown error occurred.");
        }
    }
    const printState = () => {
        console.log(longitude, latitude)
    }

    return (
        <section>
            <div className="mainText3">
                <ButtonGroup className="mainText5">
                    <Button id={'estuary_incident'} onClick={getLocation}>שפך</Button>
                    <Button id={'security_incident'} onClick={getLocation}>אירוע ביטחוני</Button>
                    <Button id={'safety_person_incident'} onClick={getLocation}>בטיחות פגיעה באדם</Button>
                </ButtonGroup>
            </div>
            <div className="mainText4">
                <ButtonGroup className="mainText5">
                    <Button id={'fire_incident'} onClick={getLocation}>שריפה</Button>
                    <Button id={'materials_incident'} onClick={getLocation}>חומר מעשן</Button>
                    <Button id={'safety_property_incident'} onClick={getLocation}>בטיחות פגיעה ברכוש</Button>
                </ButtonGroup>
            </div>
        </section>
    );
}

export default SimpleText

