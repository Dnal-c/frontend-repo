// import {useInfiniteQuery, useQuery} from "@tanstack/react-query";
// import {request} from "../utils/common";
// import {useState} from "react";
//
// const getSearchFeedByKeyword = async ({keywords, cursor}) => {
//     const path = `videos/?query=${keywords}`
//     // const path = `feed/search?keywords=${keywords}&count=10&cursor=${cursor}&region=${REGION}`
//     const response = await request({
//         path,
//     })
//
//     return response;
// }
//
// export const useSearch = () => {
//     const [params, setParams] = useState({
//         keywords: '',
//         // cursor: 0,
//     })
//     const {data} = useQuery({
//     // const {data, fetchNextPage, hasNextPage, isFetching} = useInfiniteQuery({
//         queryKey: ['searchFeed', params.keywords],
//         queryFn: ({pageParam = params}) => getSearchFeedByKeyword(pageParam),
//         // getNextPageParam: ({data}) => {
//         //     return data?.hasMore ? {...params, cursor: data?.cursor + 10} : undefined
//         // },
//         enabled: !!params.keywords
//     })
//
//     // return {params, data: data?.pages || [], isFetching, setParams, fetchNextPage, hasNextPage}
//     return {params, data: data || [], setParams,}
//     // return { setParams }
// }