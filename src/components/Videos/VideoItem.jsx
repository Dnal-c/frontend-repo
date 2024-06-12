import React from 'react';
import Video from './Video';
import { Box, useMediaQuery } from '@mui/material';
import { theme } from '../../utils/theme';

const VideoItem = ({ video_id: videoId, author, description_ru, link }) => {
    const mediaMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            sx={{
                display: 'flex',
                marginBottom: '100px',
                width: '100%',
                columnGap: '10%',
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    position: 'relative',
                },
            }}
        >
            <Video
                url={link}
                videoId={videoId}
                height={!mediaMobile ? '360px' : '90vh'}
                width={!mediaMobile ? '400px' : '100%'}
            />
            <Box
                sx={{
                    width: '100%',
                    [theme.breakpoints.down('md')]: {
                        position: 'absolute',
                        bottom: '10%',
                        width: '70vw',
                        left: '15%',
                    },
                }}
            >
                {description_ru}
            </Box>
        </Box>
    );
};

export default VideoItem;
