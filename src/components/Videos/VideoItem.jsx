import React from 'react';
import VideoUser from "./VideoUser";
import Video from "./Video";
import {Box} from "@mui/material";

const VideoItem = ({video_id: videoId, author, description_ru, link}) => {
    console.log('link', link)
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '2fr 1fr', marginBottom: '100px', columnGap: '50px'}}>
            {/*<VideoUser {...author} />*/}
            <Video url={link} videoId={videoId} />
            <div className='video-title'>{description_ru}</div>
        </Box>
    );
};

export default VideoItem;