import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import VideoItem from '../../components/Videos/VideoItem';
import { getSearchFeed } from '../../api/searchFeed';
import { theme } from './../../utils/theme';

const SearchFeed = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [data, setData] = useState([]);

    useEffect(() => {
        getSearchFeed(query).then((result) => setData(result));
    }, [query]);

    return (
        <Box
            sx={{
                margin: '130px 20% 0',
                overflow: 'auto',
                [theme.breakpoints.down('md')]: {
                    margin: '15% 1%',
                },
                [theme.breakpoints.down('sm')]: {
                    margin: '23% 1% 15%',
                },
            }}
        >
            {data.map((item, idx) => {
                return (
                    <Fragment key={idx}>
                        <Box
                            sx={{
                                color: '#fff',
                                width: '100%',
                                margin: '0 auto',
                            }}
                        >
                            <VideoItem key={item.link} {...item} />
                        </Box>
                    </Fragment>
                );
            })}
        </Box>
    );
};

export default SearchFeed;
