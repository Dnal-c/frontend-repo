import axios from 'axios';

const SEARCH_URL = `http://178.170.242.192:30042/`;
const UPLOAD_URL = `http://178.170.242.192:30043/`;

export const $searchApi = axios.create({
    withCredentials: false,
    baseURL: SEARCH_URL,
    insecureHTTPParser: true,
});

export const $uploadApi = axios.create({
    withCredentials: false,
    baseURL: UPLOAD_URL,
    insecureHTTPParser: true,
});

