import React, {Fragment} from 'react';
import {useParams} from "react-router-dom";
import {useUser} from "../../hooks/useUser";
import {Alert} from "@mui/material";
import Spinner from "../Spinner/Spinner";
import {formatCompactNum, replaceWithBr} from "../../utils/common";
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LockIcon from '@mui/icons-material/Lock'
import UserTabs from "./UserTabs";
import {userData as data, error, isLoading, code} from "../../mocks/user";

const User = () => {
    const {uniqueId} = useParams()
    // const {data, code, error, isLoading} = useUser(uniqueId);

    if (code === -1) {
        return (
            <div className='error-message'>
                <Alert severity='error'>
                    {error || 'User doesnt exist'}
                </Alert>
            </div>
        )
    }

    if (isLoading) return <Spinner/>

    const {
        stats: {followingCount, followerCount, heartCount, videoCount},
        user: {
            avatarMedium,
            nickname,
            youtube_channel_id: youtubeId,
            twitter_id: twitterId,
            ins_id: insId,
            signature,
            privateAccount,
            openFavorite
        }
    } = data;

    const statsData = [
        {
            text: "Following",
            count: followingCount
        },
        {
            text: "Followers",
            count: followerCount
        },
        {
            text: "Likes",
            count: heartCount
        },
        {
            text: "Videos",
            count: videoCount
        },
    ];

    const socialsData = [
        {
            link: `https://youtube.com`,
            icon: <YouTubeIcon/>,
            id: youtubeId,
        },
        {
            link: `https://twitter.com`,
            icon: <TwitterIcon/>,
            id: twitterId,
        },
        {
            link: `https://instagram.com`,
            icon: <InstagramIcon/>,
            id: insId,
        },
    ]

    const hasSocials = socialsData.some(({id}) => id)

    return (
        <div className='user'>
            <div className="user-top flex">
                <div className='user-avatar' style={{backgroundImage: `url(${avatarMedium})`}}>
                    <div className="user-info">
                        <div className='user-unique'>
                            {uniqueId}
                        </div>
                        <div className='user-nickname'>
                            {nickname}
                        </div>
                    </div>
                    <ul className="user-stats flex">
                        {statsData.map(({text, count}) => <li key={text} className='user-stats__item flex'>
                            <span>{formatCompactNum(count)}</span>
                            <p>{text}</p>
                        </li>)}
                    </ul>
                    {!signature ?
                        <p>No bio yet</p>
                        :
                        <div className='user-signature' dangerouslySetInnerHTML={{__html: replaceWithBr(signature)}}/>
                    }
                    {hasSocials && (
                        <ul className="user-socials flex">
                            {socialsData.map(({link, icon, id}) => {
                                const href = `${link}/${id}`
                                return (
                                    id ? (<li className="user-socials__item flex" key={href}>
                                        <a href={href} target="__blank">
                                            {icon}
                                        </a>
                                    </li>) : <Fragment key={href}/>
                                )
                            })}
                        </ul>
                    )}
                </div>
            </div>
            {!privateAccount ? (
                <UserTabs openFavorite={openFavorite}/>
            ) : (
                <p className="user-private flex flex-center">
                    <span>This account is private</span>
                    <LockIcon/>
                </p>
            )}
        </div>
    );
};

export default User;