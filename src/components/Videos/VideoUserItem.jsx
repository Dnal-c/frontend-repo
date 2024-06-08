import React from 'react';
import Video from "./Video";
import {PlayArrow} from "@mui/icons-material";
import {formatCompactNum} from "../../utils/common";

const VideoUserItem = ({video_id: videoId, play, title, play_count: playCount}) => (
    <div className='video'>
        <Video videoId={videoId} url={play}/>
        <div className="video-play__count flex flex-center">
            <PlayArrow/>
            <span>{formatCompactNum(playCount)}</span>
        </div>
        <div className="video-title">{title}</div>
    </div>
)

export default VideoUserItem;