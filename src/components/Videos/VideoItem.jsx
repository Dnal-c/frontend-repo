import React from 'react';
import VideoUser from "./VideoUser";
import Video from "./Video";
import {Box} from "@mui/material";

const VideoItem = ({video_id: videoId, author, title, play}) => {
    return (
        <Box sx={{display: 'grid', gridTemplateColumns: '60% 40%', marginBottom: '100px', columnGap: '50px'}}>
            {/*<VideoUser {...author} />*/}
            <Video url={play} videoId={videoId} />
            <div className='video-title'>{title}</div>
        </Box>
    );
};

export default VideoItem;