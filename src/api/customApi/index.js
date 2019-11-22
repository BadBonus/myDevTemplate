import axios from "axios";
import { BASE_GHIBLI_URL } from "../api_variables";

const http = axios.create();

const makeCustomApi = ({ client, headersManager }) => ({
  getGhibliFilms: () => http.get(`${BASE_GHIBLI_URL}/films`),
});

export default makeCustomApi;
