import React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import LOGO from '../../assets/logo-full.svg';
import Search from '../../components/Search/Search';
import { theme } from '../../utils/theme';

const Main = () => {
    const mediaMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box
            sx={{
                height: '100%',
                display: 'grid',
                placeItems: 'center',
                alignContent: 'space-between',
                marginTop: '7%',
                [theme.breakpoints.down('md')]: {
                    margin: '15% 5%',
                },
            }}
        >
            <Box
                sx={{
                    [theme.breakpoints.down('md')]: {
                        margin: '1% 10%',
                    },
                }}
            >
                <img src={LOGO} alt="MAIN_LOGO" height={!mediaMobile ? 150 : 100} style={{ marginBottom: '50px' }} />
                <Search />
            </Box>
        </Box>
    );
};

export default Main;
