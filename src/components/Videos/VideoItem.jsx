import React from 'react';
import VideoUser from "./VideoUser";
import Video from "./Video";
import {Box} from "@mui/material";

const VideoItem = ({video_id: videoId, author, description_ru, link}) => {
    return (
        <Box sx={{display: 'flex', marginBottom: '100px', width: '100%', columnGap: '10%'}}>
            <Video url={link} videoId={videoId} width='400px'/>
            <div style={{ width: '100%'}}>{description_ru}</div>
        </Box>
    );
};

export default VideoItem;