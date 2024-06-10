import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchUserPosts} from "../../api";
import Spinner from "../Spinner/Spinner";
import {Alert} from "@mui/material";
import VideoUserItem from "../Videos/VideoUserItem";
import {Loop} from "@mui/icons-material";
import {userVideosData as data, isError, isLoading, isFetching} from "../../mocks/userVideos";

const UserVideos = () => {
    const [items, setItems] = useState([]);
    const [cursor, setCursor] = useState(0);
    const {uniqueId} = useParams();

    // const {data, isFetching, isError, isLoading} = useQuery({
    //     queryKey: ['userPosts', uniqueId, cursor],
    //     queryFn: () => fetchUserPosts({uniqueId, cursor: 0}),
    //     keepPreviousData: true,
    // })


    useEffect(() => {
        const currentVideos = data?.data?.videos || [];
        if (!currentVideos.length) return;

        setItems((_items) => ([..._items, ...currentVideos]))
    }, [data])

    if (isLoading) return <Spinner/>

    if (isError || data?.code === -1) return (
        <Alert severity='error' sx={{width: '100%'}}>
            {data?.msg || 'Something went wrong. Try again later'}
        </Alert>
    )

    const {data: {hasMore, cursor: next}} = data

    const handleLoadMore = () => setCursor(next);

    return (
        <div className='user-wrapper'>
            {items.length ? (
                <div className="user-videos">
                    {items.map((video) => <VideoUserItem key={video.video_id} {...video} />)}
                    {hasMore && (
                        <button onClick={handleLoadMore}
                                className={`flex flex-center user-videos__btn ${isFetching ? 'loading' : ''}`}>
                            <Loop/>
                            <span>Load More</span>
                        </button>
                    )}
                </div>
            ) : (<Alert severity='info'>{uniqueId} doesn't have videos yet</Alert>)}

        </div>
    );
};

export default UserVideos;