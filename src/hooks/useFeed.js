import {useQuery} from "@tanstack/react-query";
import {REGION} from "../utils/constants";
import {request} from "../utils/common";
import {feedData} from "../mocks/feed";

const getFeed = async () => {
    const response = await request({
        path: `feed/list?region=${REGION}&count=20`,
    })

    return response;
}

export const useFeed = () => {
    const {data, isLoading} = useQuery({
        queryKey: ['feed'],
        queryFn: getFeed
    })

    // const data = feedData;
    // const isLoading = false;

    return {data: data?.data || [], isLoading}
}