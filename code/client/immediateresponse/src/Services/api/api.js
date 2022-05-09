import Axios from "axios";

const $axios = Axios.create({
    baseURL: "/api/",
    headers: {"Content-Type": "application/json"},
});

class Report_incident {
    static report_incident_by_mail(incident, latitude, longitude) {
        return $axios
            .post('report_incident_by_mail/', {incident, latitude, longitude});
    }
}

export default Report_incident
