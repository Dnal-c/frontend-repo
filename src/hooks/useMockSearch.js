import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
import {REGION} from "../utils/constants";
import {request} from "../utils/common";
import {useState} from "react";

const getSearchFeedByKeyword = async ({keywords, cursor}) => {
    console.log('keywords', keywords)
    const path = `videos/mock/?query=${keywords}`
    const response = await request({
        path,
    })

    return response;
}

export const useMockSearch = () => {
    const [params, setParams] = useState({
        keywords: '',
    })
    const {data} = useQuery({
        queryKey: ['mockSearch', params.keywords],
        queryFn: ({pageParam = params}) => getSearchFeedByKeyword(pageParam),
        enabled: !!params.keywords
    })

    console.log('data', data)

    // return {params, data: data?.pages || [], isFetching, setParams, fetchNextPage, hasNextPage}
    return {params, data: data || [], setParams,}
    // return { setParams }
}