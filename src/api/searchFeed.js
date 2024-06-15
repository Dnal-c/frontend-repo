import { $searchApi } from './../utils/common';

export async function getSearchFeed(keyword) {
    const res = await $searchApi.get(`/search?text=${keyword}`);
    return res?.data;
}

export async function getAutocomplete(keyword) {
    const res = await $searchApi.get(`/videos/suggest?query=${keyword}`);
    return res?.data;
}
