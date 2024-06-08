import React from 'react';
import {useVideo} from "../../hooks/useVideo";
import {useNavigate, useParams} from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import {Close, MusicNote} from "@mui/icons-material";
import VideoUser from "./VideoUser";
import Video from "./Video";
import {useComments} from "../../hooks/useComments";
import {commentsData as comments, singleVideoData as data, isCommentsLoading, isLoading} from "../../mocks/singleVideo";

const SingleVideo = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    // const {data, isLoading} = useVideo(id);
    // const {comments, isCommentsLoading} = useComments({id, cursor: 0});

    if (isLoading) return <Spinner/>

    const {origin_cover: cover, hdplay, author, music_info: {title: songTitle}, title} = data;


    const handleClose = () => {
        // navigate(-1)
        navigate(`/user/${author.unique_id}`)
    }
    return (
        <div className='single_video'>
            <div className='single_video__close' onClick={handleClose}>
                <Close/>
            </div>
            <div className="single-video__item" style={{backgroundImage: `url(${cover})`}}>
                <Video url={hdplay} width='auto' height='calc(100vh-64px)'/>
            </div>
            <div className='single-video__info flex'>
                <div className="single-video__description">
                    <VideoUser {...author}/>
                    <div className="single-video__title video-title">
                        {title}
                    </div>
                    <div className="single-video__song flex">
                        <MusicNote/>
                        <span>{songTitle}</span>
                    </div>
                </div>
                {isCommentsLoading ? <Spinner/> : (
                    comments.length ?
                        <ul className='single-video__comments flex'>
                            {comments.map(({user, text, id}) => (
                                <li key={id} className='single-video__comment'>
                                    <VideoUser/>
                                    <div className="single-video__text">{text}</div>
                                </li>
                            ))}
                        </ul> : <p>No comments yet...</p>
                )}
            </div>
        </div>
    );
};

export default SingleVideo;