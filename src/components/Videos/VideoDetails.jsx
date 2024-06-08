import React from 'react';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import {formatCompactNum} from "../../utils/common";

const VideoDetails = ({
                          play_count: playCount,
                          digg_count: diggCount,
                          comment_count: commentCount,
                          share_count: shareCount,
                      }) => {
    const details = [
        {
            icon: <PlayArrowIcon/>,
            count: playCount,
        },
        {
            icon: <ChatBubbleIcon/>,
            count: commentCount,
        },
        {
            icon: <ShareIcon/>,
            count: shareCount,
        },
        {
            icon: <FavoriteIcon/>,
            count: diggCount,
        },
    ]
    return (
        <List sx={{width: '100%', maxWidth: 360}}>

            {/*<ul className="video-details flex">*/}
            {details.map(({icon, count}, i) => (
                <ListItem key={i} sx={{color: '#fff'}}>
                    <ListItemAvatar>
                        {/*<Avatar>*/}
                        {icon}
                        {/*</Avatar>*/}
                    </ListItemAvatar>
                    <ListItemText primary={formatCompactNum(count)}/>
                </ListItem>
                // <li key={i} className="video-details_item">
                //     {icon}
                //     <p>{formatCompactNum(count)}</p>
                // </li>
            ))}
            {/*</ul>*/}
        </List>
    );
};

export default VideoDetails;