import Axios from "axios";

const $axios = Axios.create({
  baseURL: "/api/",
  headers: { "Content-Type": "application/json" },
});

class Report_incident {
  static report_incident_by_mail(incident, latitude, longitude) {
    console.log("report_incident_by_mail")
    //console.log("in api" + incident + latitude + longitude)
    return $axios.post("report_incident_by_mail/", {
      incident,
      latitude,
      longitude,
    }).then(response => response.data);
  }
}

class Get_all_incidents {
  static get_all_incidents() {
    return $axios.get("get_all_incidents/").then((response) => response.data);
  }
}

class Get_incident {
  static get_incident(incident) {
    console.log("We are in views" + incident);
    return $axios
      .get("get_incident/", {
        params: { incident: incident },
      })
      .then((response) => response.data);
  }
}
const apiServices = { Get_all_incidents, Get_incident, Report_incident };
export default apiServices;
