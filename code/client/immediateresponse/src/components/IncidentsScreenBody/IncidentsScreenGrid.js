import React, {useContext} from "react";
import "./IncidentsScreenGrid.css";
import IncidentContext from "../../context/IncidentContext";
import Report_incident from "../../Services/api/api";
import {Link} from "react-router-dom";

function SimpleText() {

    const incidentContext = useContext(IncidentContext);

    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(getCoordinates, handlerLocationError);
    }
    const getCoordinates =  ({coords}) => {
        setLatitude(coords.latitude)
        setLongitude(coords.longitude)
        console.log(latitude)
        console.log(longitude)
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
    const reportIncidentOnClick = (incident) => {
        console.log("button id = " + incident);
        getLocation();
        console.log("before api --> " + latitude)
        console.log("before api --> " + longitude)
        Report_incident.report_incident_by_mail(incident, latitude, longitude)
        incidentContext.incident = incident;
        console.log(incidentContext);
    }

    return (
        <section className="incidents-grid-container">
            <Link to="/chat">
                <div onClick={() => reportIncidentOnClick('estuary_incident')} className="incident">
                    <img/>
                    <p>שפך</p>
                </div>
            </Link>
            <Link to="/chat">
                <div onClick={() => reportIncidentOnClick('fire_incident')} className="incident">
                    <img/>

                    <p>שריפה</p>
                </div>
            </Link>
            <Link to="/chat">
                <div onClick={() => reportIncidentOnClick('security_incident')} className="incident">
                    <img/>

                    <p>אירוע ביטחוני</p>
                </div>
            </Link>
            <Link to="/chat">
                <div onClick={() => reportIncidentOnClick('materials_incident')} className="incident">
                    <img/>

                    <p>חומר מעשן</p>
                </div>
            </Link>
            <Link to="/chat">
                <div onClick={() => reportIncidentOnClick('safety_person_incident')} className="incident">
                    <img/>

                    <p>פגיעה בחיי אדם</p>
                </div>
            </Link>
            <Link to="/chat">
                <div onClick={() => reportIncidentOnClick('safety_property_incident')} className="incident">
                    <img/>

                    <p>בטיחות פגיעה ברכוש</p>
                </div>
            </Link>
            {/*<div className="mainText3">*/}
            {/*    <ButtonGroup className="mainText5">*/}
            {/*        <Link to="/chat">*/}
            {/*        <Button id={"estuary_incident"} onClick={reportIncidentOnClick}>שפך</Button>*/}
            {/*        </Link>*/}
            {/*        <Link to="/chat">*/}
            {/*        <Button id={'security_incident'} onClick={reportIncidentOnClick}>אירוע ביטחוני</Button>*/}
            {/*        </Link>*/}
            {/*        <Link to="/chat">*/}
            {/*        <Button id={'safety_person_incident'} onClick={reportIncidentOnClick}>בטיחות פגיעה באדם</Button>*/}
            {/*        </Link>*/}
            {/*    </ButtonGroup>*/}
            {/*</div>*/}
            {/*<div className="mainText4"><ButtonGroup className="mainText5">*/}
            {/*        <Link to="/chat">*/}
            {/*        <Button id={'fire_incident'} onClick={reportIncidentOnClick}>שריפה</Button>*/}
            {/*        </Link>*/}
            {/*        <Link to="/chat">*/}
            {/*        <Button id={'materials_incident'} onClick={reportIncidentOnClick}>חומר מעשן</Button>*/}
            {/*        </Link>*/}
            {/*        <Link to="/chat">*/}
            {/*        <Button id={'safety_property_incident'} onClick={reportIncidentOnClick}>בטיחות פגיעה ברכוש</Button>*/}
            {/*        </Link>*/}
            {/*    </ButtonGroup>*/}
            {/*</div>*/}
        </section>
    );
}

export default SimpleText;

