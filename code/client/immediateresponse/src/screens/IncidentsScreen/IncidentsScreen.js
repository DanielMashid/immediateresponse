import React from "react";
import Header from "../../components/Header/Header";
import IncidentsScreenTopText from "../../components/IncidentsScreenBody/IncidentsScreenTopText";
import IncidentsScreenGrid from "../../components/IncidentsScreenBody/IncidentsScreenGrid";
import IncidentScreenCancelButton from "../../components/IncidentsScreenBody/IncidentScreenCancelButton";


const IncidentsScreen = () => {
    return (
        <div>
            <IncidentsScreenTopText/>
            <IncidentsScreenGrid/>
            <IncidentScreenCancelButton/>
        </div>
    )
}

export default IncidentsScreen