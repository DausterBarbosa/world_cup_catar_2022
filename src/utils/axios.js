import Axios from "axios";

const api = Axios.create({
    baseURL: "https://estagio.geopostenergy.com/",
    headers: {
        get: {
            "git-user": "DausterBarbosa"
        }
    }
});

export default api;