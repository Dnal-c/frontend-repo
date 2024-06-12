import { $api } from './../utils/common';

export async function getSearchFeed(keyword) {
    const res = await $api.get(`/videos/?query=${keyword}`);
    return res?.data;
}

export async function getAutocomplete(keyword) {
    const res = await $api.get(`/videos/suggest?query=${keyword}`);
    return res?.data;
}
