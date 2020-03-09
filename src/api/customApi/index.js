import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { BASE_GHIBLI_URL } from '../index';

const http = axios.create();

const makeCustomApi = ({ client, headersManager }) => ({
  getGhibliFilms: () => http.get(`${BASE_GHIBLI_URL}/films`),
});

export default makeCustomApi;
