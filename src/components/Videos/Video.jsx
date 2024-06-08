import React from 'react';
import ReactPlayer from "react-player";
import {Box} from "@mui/material";
import {useInView} from 'react-intersection-observer'

const Video = ({url = '', videoId, width = '100%', height = '360px'}) => {
    const {ref, inView} = useInView({
        threshold: 0.5,
    })

    return (
        <Box sx={{width: '100%', position: 'relative'}} ref={ref}>
                <ReactPlayer
                    loop={true}
                    playing={inView}
                    muted
                    controls={true}
                    url={url}
                    width={width}
                    height={height}
                />
        </Box>
    );
};

export default Video;