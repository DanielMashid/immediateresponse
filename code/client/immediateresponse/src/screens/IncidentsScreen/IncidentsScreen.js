import React from "react";
import IncidentsScreenTopText from "../../components/IncidentsScreenBody/IncidentsScreenTopText";
import IncidentsScreenGrid from "../../components/IncidentsScreenBody/IncidentsScreenGrid";
import IncidentScreenCancelButton from "../../components/IncidentsScreenBody/IncidentScreenCancelButton";
import Header from "../../components/Header/Header";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";

const IncidentsScreen = () => {
  return (
    <CssBaseline>
      <Header />
      <IncidentsScreenTopText />
      <IncidentsScreenGrid />

      <Link to="/sos">
        <IncidentScreenCancelButton />
      </Link>
    </CssBaseline>
  );
};

export default IncidentsScreen;
