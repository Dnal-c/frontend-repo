import React, {Fragment, useEffect} from 'react';
import {Link, useSearchParams} from "react-router-dom";
import {useSearch} from "../../hooks/useSearch";
import {Alert, Box} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import VideoItem from "../Videos/VideoItem";
import Spinner from "../Spinner/Spinner";
// import {dataSearchFeed as data, hasNextPage, fetchNextPage, isFetching} from "../../mocks/data";
import {feedData as feed, isLoading} from "../../mocks/feed";
import Video from "../Videos/Video";
import {MusicNote} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {formatCompactNum} from "../../utils/common";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const SearchFeed = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q');

    // const {data, hasNextPage, fetchNextPage, isFetching, setParams} = useSearch();
    const {data, setParams} = useSearch();
    // const {setParams} = useSearch();
    // console.log('data', data)
    // console.log('hasNextPage', hasNextPage)
    // console.log('fetchNextPage', fetchNextPage)
    // console.log('isFetching', isFetching)
    // console.log('setParams', setParams)


    useEffect(() => {
        setParams((__params) => ({...__params, keywords: query}));
    }, [setParams, query])

    console.log('feed', feed)
    console.log('isloa', isLoading)
    console.log('data', data)
    return (
        <Box sx={{marginTop: '130px', overflow: 'auto', marginRight: '100px'}}>
            {data.map((item, idx) => {
                return (
                    <Fragment key={idx}>
                        <Box sx={{
                            color: '#fff',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <VideoItem key={item.link} {...item} />
                        </Box>
                    </Fragment>
                )
            })}
            {/*{!data.length ?*/}
            {/*    <div className='error-message'>*/}
            {/*        <Alert severity='error'> Nothing for {query} </Alert>*/}
            {/*    </div>*/}
            {/*    :*/}
            {/*})}*/}
            {/*    data.map((item, idx) => {*/}
            {/*    return (<Fragment key={idx}>*/}
            {/*/!*<InfiniteScroll sx={{overflow: 'hidden'}} next={fetchNextPage} hasMore={hasNextPage} scrollThreshold='600px'*!/*/}
            {/*/!*                dataLength={videos.length}>*!/*/}
            {/*    <Box sx={{*/}
            {/*    color: '#fff',*/}
            {/*    display: 'flex',*/}
            {/*    flexDirection: 'column',*/}
            {/*    alignItems: 'center'*/}
            {/*}}>*/}
            {/*{item.map((video) => <VideoItem key={video.video_id} {...video} />)}*/}
            {/*    </Box>*/}
            {/*/!*</InfiniteScroll>*!/*/}
            {/*    </Fragment>)*/}

            {/*})*/}
            {/*{isFetching && <Spinner/>}*/}
        </Box>)
    // !isLoading ? (
    //     <>
    //         <Box sx={{paddingTop: '100px', height: '200px'}} className="feed">
    //             {feed.map(({
    //                            video_id: videoId,
    //                            title,
    //                            play,
    //                            music_info: {title: songTitle},
    //                            author,
    //                            digg_count: diggCount,
    //                            create_time,
    //                            ...rest
    //                        }) => {
    //                 const datePublication = new Date(create_time * 1000).toLocaleDateString('ru-RU');
    //                 return (
    //                     <Box sx={{marginLeft: '10px'}} className='video' key={videoId}>
    //                         <Box className='qwerty'
    //                              sx={{display: 'grid', gridTemplateColumns: '25% 25% 50%'}}>
    //                             <Box sx={{height: '60vh', marginBottom: '100px'}} className='video-wrapper'>
    //                                 <Video url={play} videoId={videoId}/>
    //                                 <Box sx={{
    //                                     fontSize: '12px',
    //                                     color: '#fff',
    //                                     transition: 'all 0.5s ease',
    //                                     animation: '4s linear infinite running line',
    //                                     "@keyframes line": {
    //                                         "0%": {
    //                                             transform: 'translateX(20%)',
    //                                         },
    //                                         "100%": {
    //                                             transform: 'translateX(-80%)',
    //                                         }
    //                                     }
    //                                 }} className="video-music flex">
    //                                     <span>Аудиодорожка - </span>
    //                                     <MusicNote/>
    //                                     <p className="video-music__title">{songTitle}</p>
    //                                 </Box>
    //                             </Box>
    //                             <Box sx={{
    //                                 display: 'flex',
    //                                 flexDirection: 'column',
    //                                 alignItems: 'center',
    //                                 gap: '40%',
    //                             }}>
    //                                 <Link to={`/user/${author.unique_id}`} style={{cursor: 'pointer'}}>
    //                                     <img src={author.avatar}
    //                                          style={{borderRadius: '50%', width: '70px', height: '70px'}}/>
    //                                 </Link>
    //                                 <Box sx={{color: '#fff'}}>
    //                                     <FavoriteIcon sx={{width: '28px', height: '28px'}}/>
    //                                     <p>{formatCompactNum(diggCount)}</p>
    //                                     <ReplyOutlinedIcon sx={{
    //                                         width: '28px',
    //                                         height: '28px',
    //                                         marginTop: '20px',
    //                                         transform: 'scale(-1,1)'
    //                                     }}/>
    //                                 </Box>
    //                                 {/*<VideoUser {...author} />*/}
    //                                 {/*<VideoDetails {...rest}/>*/}
    //                             </Box>
    //                             <Box sx={{
    //                                 color: '#fff',
    //                                 maxWidth: 360,
    //                                 display: 'flex',
    //                                 flexDirection: 'column',
    //                                 gap: '5%'
    //                             }}>
    //                                 <Link to={`/user/${author.unique_id}`} style={{
    //                                     textDecoration: 'none',
    //                                     color: '#fff',
    //                                     cursor: 'pointer'
    //                                 }}>@{author.unique_id}</Link>
    //                                 <Box>
    //                                     <Box sx={{marginBottom: '10px'}}>{title}</Box>
    //                                     <p>Дата публикации: {datePublication}</p>
    //                                 </Box>
    //
    //                             </Box>
    //                         </Box>
    //                     </Box>
    //                 )
    //             })}
    //         </Box>
    //     </>
    // ) : (
    //     <Spinner/>
    // );
};


export default SearchFeed;