import React, { useContext } from "react";
import "./IncidentsScreenGrid.css";
import apiServices from "../../Services/api/api";
import IncidentContext from "../../context/IncidentContext";
import { Link } from "react-router-dom";
import fire from "../assets/fire.png";
import estuary from "../assets/estuary.png";
import materials from "../assets/materials.png";
import security from "../assets/security.png";
import safety from "../assets/safety_person.png";
import property from "../assets/safety_property.png";

function SimpleText() {
  let incident;
  const incidentContext = useContext(IncidentContext);
  console.log(incidentContext);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handlerLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };
  const getCoordinates = ({ coords }) => {
    apiServices.Report_incident.report_incident_by_mail(
      incident,
      coords.latitude,
      coords.longitude
    ).then((r) => console.log(r));
  };
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
  };
  const reportIncidentOnClick = (currIncident) => {
    incident = currIncident;
    console.log("xxx in incident screen", incident);
    getLocation();
    getOneIncident(incident);
    incidentContext.incident = incident;
  };

  //verify that we can get (filter) incidents by name
  const getOneIncident = async (incident) => {
    let temp = await apiServices.Get_incident.get_incident(incident);
    console.log(temp);
  };

  return (
    <section className="incidents-grid-container">
      <div className="btn-container">
        <Link to="/sos">
          <button className="end-btn">סיום אירוע</button>
        </Link>
      </div>
      <div className="title-container">
        <p>בחר אירוע חירום המתרחש</p>
      </div>
      <div className="incidents-container">
        <Link to="/chat">
          <div
            onClick={() => reportIncidentOnClick("estuary_incident")}
            className="incident"
          >
            <img className="incident-img" src={estuary} alt="estuary" />
            <p>שפך</p>
          </div>
        </Link>
        <Link to="/chat">
          <div
            onClick={() => reportIncidentOnClick("fire_incident")}
            className="incident"
          >
            <img className="incident-img-big" src={fire} alt="fire" />

            <p>שריפה</p>
          </div>
        </Link>
        <Link to="/chat">
          <div
            onClick={() => reportIncidentOnClick("security_incident")}
            className="incident"
          >
            <img className="incident-img" src={security} alt="security" />

            <p>אירוע ביטחוני</p>
          </div>
        </Link>
        <Link to="/chat">
          <div
            onClick={() => reportIncidentOnClick("materials_incident")}
            className="incident"
          >
            <img className="incident-img-big" src={materials} alt="materials" />

            <p>חומר מעשן</p>
          </div>
        </Link>
        <Link to="/chat">
          <div
            onClick={() => reportIncidentOnClick("safety_person_incident")}
            className="incident"
          >
            <img className="incident-img" src={safety} alt=" safety" />

            <p>פגיעה בחיי אדם</p>
          </div>
        </Link>
        <Link to="/chat">
          <div
            onClick={() => reportIncidentOnClick("safety_property_incident")}
            className="incident"
          >
            <img className="incident-img-big2" src={property} alt="property" />

            <p>פגיעה ברכוש</p>
          </div>
        </Link>
      </div>
      <Link to="/sos"></Link>
    </section>
  );
}

export default SimpleText;
