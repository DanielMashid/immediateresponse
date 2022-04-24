import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import IncidentContext from "./context/IncidentContext";

ReactDOM.render(
  <React.StrictMode>
    <IncidentContext.Provider value={{ incident: "" }}>
      <App />
    </IncidentContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
