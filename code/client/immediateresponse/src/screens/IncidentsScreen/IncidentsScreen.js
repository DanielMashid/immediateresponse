import React from "react";
import IncidentsScreenGrid from "../../components/IncidentsScreenBody/IncidentsScreenGrid";
import {CssBaseline} from "@mui/material";
import Header from "../../components/Header/Header";

const IncidentsScreen = () => {
    return (
        <CssBaseline>
            <Header title="בחירת אירוע"/>
            <IncidentsScreenGrid/>
        </CssBaseline>
    )
}

export default IncidentsScreen;
