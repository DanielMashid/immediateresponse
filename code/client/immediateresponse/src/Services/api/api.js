import Axios from "axios";

const $axios = Axios.create({
    baseURL: "/api/",
    headers: { "Content-Type": "application/json" },
});

class Report_incident {
    static report_incident_by_mail(incident, latitude, longitude) {
        console.log("id in api = " + incident)
        console.log("id in api = " + latitude)
        console.log("id in api = " + longitude)
        return $axios
            .post('report_incident_by_mail/', {id_incident: incident, latitude, longitude});
            //.then((response) => console.log("here"));
    }
}

export default Report_incident
