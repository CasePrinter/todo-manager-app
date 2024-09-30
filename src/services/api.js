import axios from "axios";

const api = axios.create({
    baseURL: 'https://nest-app-project-1009725684335.us-central1.run.app/api/',
});

export default api;