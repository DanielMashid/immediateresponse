import Axios from "axios";

const $axios = Axios.create({
    baseURL: "api/",
    headers: { "Content-Type": "application/json" },
});

class report_incident {
    static report_incident_by_mail(id_incident) {
        return $axios
            .post('report_incident_by_mail', {params: {firstParams:id_incident}})
            .then()
    }
}

export default report_incident