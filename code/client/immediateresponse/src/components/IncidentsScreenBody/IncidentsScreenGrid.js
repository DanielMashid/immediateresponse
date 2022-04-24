import React, { useContext } from "react";
import "./IncidentsScreenGrid.css";
import { Button, ButtonGroup } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

import IncidentContext from "../../context/IncidentContext";

function SimpleText() {
  const incidentContext = useContext(IncidentContext);

  const reportIncidentOnClick = (e) => {
    incidentContext.incident = e.currentTarget.id;
    console.log(incidentContext);
  };
  return (
    <div>
      <div className="mainText3">
        <ButtonGroup className="mainText5">
          <Link to="/chat">
            <Button id={"שפך"} onClick={reportIncidentOnClick}>
              שפך
            </Button>
          </Link>
          <Link to="/chat">
            <Button id={"אירוע ביטחוני"} onClick={reportIncidentOnClick}>
              אירוע ביטחוני
            </Button>
          </Link>
          <Link to="/chat">
            <Button id={"בטיחות פגיעה באדם"} onClick={reportIncidentOnClick}>
              בטיחות פגיעה באדם
            </Button>
          </Link>
        </ButtonGroup>
      </div>
      <div className="mainText4">
        <ButtonGroup className="mainText5">
          <Link to="/chat">
            <Button id={"שריפה"} onClick={reportIncidentOnClick}>
              שריפה
            </Button>
          </Link>
          <Link to="/chat">
            <Button id={"חומר מעשן"} onClick={reportIncidentOnClick}>
              חומר מעשן
            </Button>
          </Link>
          <Link to="/chat">
            <Button id={"בטיחות פגיעה ברכוש"} onClick={reportIncidentOnClick}>
              בטיחות פגיעה ברכוש
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
}

export default SimpleText;
