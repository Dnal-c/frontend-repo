import { $uploadApi } from '../utils/common';

export async function postPredictByFile(params) {
    const res = await $uploadApi.post('predict-by-file', params);
    return res;
}

export async function postPredictByLink(params) {
    const res = await $uploadApi.post('index', params);
    return res;
}