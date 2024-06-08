import React from 'react';
import {Link} from "react-router-dom";

const VideoUser = ({unique_id: uniqueId, nickname, avatar}) => (
    <Link to={`/user/${uniqueId}`} className="video-author flex">
        <div className='video-author__image' style={{backgroundImage: `url(${avatar})`}}/>
        <div className="video-author__info">
            <p>{nickname}</p>
            <span>{uniqueId}</span>
        </div>
    </Link>
)

export default VideoUser;