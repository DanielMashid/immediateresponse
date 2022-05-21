import Axios from "axios";

const $axios = Axios.create({
  baseURL: "/api/",
  headers: { "Content-Type": "application/json" },
});

class Report_incident {
  static report_incident_by_mail(incident, latitude, longitude) {
    return $axios
      .post("report_incident_by_mail/", {
        incident,
        latitude,
        longitude,
      })
      .then((response) => response.data);
  }
}

class Get_all_incidents {
  static get_all_incidents() {
    return $axios.get("get_all_incidents/").then((response) => response.data);
  }
}

class Get_incident {
  static get_incident(incident) {
    return $axios
      .get("get_incident/", {
        params: { incident: incident },
      })
      .then((response) => response.data);
  }
}
const $axios2 = Axios.create({
  baseURL: "/chat/",
  headers: { "Content-Type": "application/json" },
});
class Chat_API {
  static new_chat(room_name) {
    console.log("new_chat");
    return $axios2
      .post("new-chatroom/", {
        room_name,
      })
      .then((response) => response.data);
  }
}

const apiServices = {
  Get_all_incidents,
  Get_incident,
  Report_incident,
  Chat_API,
};
export default apiServices;
