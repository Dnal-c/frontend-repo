import axios from 'axios';

const BASE_URL = `http://178.170.242.192:30042/`;

export const $api = axios.create({
    withCredentials: false,
    baseURL: BASE_URL,
    insecureHTTPParser: true,
});
