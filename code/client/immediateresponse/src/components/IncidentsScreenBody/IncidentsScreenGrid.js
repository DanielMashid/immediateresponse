import React, { useContext } from "react";
import "./IncidentsScreenGrid.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

import IncidentContext from "../../context/IncidentContext";
import React from "react";
import './IncidentsScreenGrid.css'
import {Button, ButtonGroup} from "@material-ui/core";
import Report_incident from "../../Services/api/api";

function SimpleText() {
    const incidentContext = useContext(IncidentContext);

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
    const reportIncidentOnClick = (event) => {
        console.log("button id = " + event.currentTarget.id);
        getLocation();
        console.log("before api --> " + latitude)
        console.log("before api --> " + longitude)
        Report_incident.report_incident_by_mail(event.currentTarget.id, latitude, longitude).then( r => console.log(r));
        incidentContext.incident = event.currentTarget.id;
        console.log(incidentContext);
    }

    return (
        <section>
            <div className="mainText3">
                <ButtonGroup className="mainText5">
                    <Link to="/chat">
                    <Button id={"estuary_incident"} onClick={reportIncidentOnClick}>שפך</Button>
                    </Link>
                    <Link to="/chat">
                    <Button id={'security_incident'} onClick={reportIncidentOnClick}>אירוע ביטחוני</Button>
                    </Link>
                    <Link to="/chat">
                    <Button id={'safety_person_incident'} onClick={reportIncidentOnClick}>בטיחות פגיעה באדם</Button>
                    </Link>
                </ButtonGroup>
            </div>
            <div className="mainText4">
                <ButtonGroup className="mainText5">
                    <Link to="/chat">
                    <Button id={'fire_incident'} onClick={reportIncidentOnClick}>שריפה</Button>
                    </Link>
                    <Link to="/chat">
                    <Button id={'materials_incident'} onClick={reportIncidentOnClick}>חומר מעשן</Button>
                    </Link>
                    <Link to="/chat">
                    <Button id={'safety_property_incident'} onClick={reportIncidentOnClick}>בטיחות פגיעה ברכוש</Button>
                    </Link>
                </ButtonGroup>
            </div>
        </section>
    );
}

export default SimpleText

