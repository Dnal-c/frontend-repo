import React from 'react';
import ReactPlayer from 'react-player';
import { Box, useMediaQuery } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import { theme } from '../../utils/theme';

const Video = ({ url = '', width = '100%', height = '360px' }) => {
    const mediaBig = useMediaQuery(theme.breakpoints.up('lg'));
    const { ref, inView } = useInView({
        threshold: !mediaBig ? 0.5 : 0.8,
    });

    return (
        <Box sx={{ width: width, position: 'relative' }} ref={ref}>
            <ReactPlayer loop={true} playing={inView} muted controls={true} url={url} width={width} height={height} />
        </Box>
    );
};

export default Video;
