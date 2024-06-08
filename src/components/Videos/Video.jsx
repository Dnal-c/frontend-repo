import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import ReactPlayer from "react-player";

import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Spinner from "../Spinner/Spinner";
import {Box} from "@mui/material";

const Video = ({url = '', videoId, width = '100%', height = '360px'}) => {
    const videoRef = useRef(null)
    const [isReady, setReady] = useState(false)
    const [isPlaying, setPlaying] = useState(false)
    const [progress, setProgress] = useState(0)

    // const handleClick = () => {
    //     setPlaying((_prev) => !_prev);
    //     videoRef?.current?.parentElement.classList.toggle('playing', !isPlaying);
    // }
    const handleProgress = ({loaded, played}) => {
        if (!loaded) return;
        setProgress(played * 100);
    }

    return (
        <Box sx={{width: '100%', position: 'relative'}} className={`video-item ${isPlaying ? 'playing' : ''}`} ref={videoRef}>
            {!isReady && (
                <div className='.video-item__loading flex flex-center'>
                    <Spinner/>
                </div>
            )}
            {/*<Link to={`/video/${videoId}`}>*/}
                <ReactPlayer style={{width: '100%'}} loop={true} playing={true} muted controls={true} url={url} width={width} height={height}
                             onProgress={handleProgress} onReady={() => setReady(true)} />
            {/*</Link>*/}
            {/*<Box sx={{color: '#808080', position: 'absolute', bottom: '30px', left: '100px'}} className="video-item__controls" onClick={handleClick}>*/}
            {/*    {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}*/}
            {/*</Box>*/}
        </Box>
    );
};

export default Video;