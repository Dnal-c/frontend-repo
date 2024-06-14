import { $uploadApi } from './../utils/common';

export async function postPredictByFile(params) {
    const res = await $uploadApi.post('api/v1/calculate-predict-by-file', params);
    return res;
}

export async function postPredictByLink(params) {
    const res = await $uploadApi.post('/api/v2/calculate-predict-by-link', params);
    return res;
}