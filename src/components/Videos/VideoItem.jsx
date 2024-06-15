import React from 'react';
import Video from './Video';
import { Box, useMediaQuery } from '@mui/material';
import { theme } from '../../utils/theme';

const VideoItem = ({ video_id: videoId, short_description, description, link }) => {
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
                    display: 'flex',
                    flexDirection: 'column',
                    [theme.breakpoints.down('md')]: {
                        position: 'absolute',
                        bottom: '10%',
                        width: '70vw',
                        left: '15%',
                    },
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        fontFamily: 'Roboto',
                        // fontStyle: 'normal',
                    }}
                >
                    {short_description}
                </Box>
                <Box
                    sx={{
                        marginTop: '15%',
                        color: '#00e5bc',
                        [theme.breakpoints.down('md')]: {
                            marginTop: '3%',
                        },
                    }}
                >
                    {description}
                </Box>
            </Box>
        </Box>
    );
};

export default VideoItem;
