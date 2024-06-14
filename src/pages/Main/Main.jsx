import React from 'react';
import { Box, Button, useMediaQuery } from '@mui/material';
import LOGO from '../../assets/logo-full.svg';
import Search from '../../components/Search/Search';
import { theme } from '../../utils/theme';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const mediaMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    return (
        <Box>
            <Box
                sx={{
                    height: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    alignContent: 'space-between',
                    marginTop: '7%',
                    gap: '20%',
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
                    <img
                        src={LOGO}
                        alt="MAIN_LOGO"
                        height={!mediaMobile ? 150 : 100}
                        style={{ marginBottom: '50px' }}
                    />
                    <Search />
                </Box>
                <Button
                    variant="contained"
                    onClick={() => {
                        navigate('/upload');
                    }}
                    startIcon={<AddIcon />}
                    sx={{ textTransform: 'none', fontWeight: '600' }}
                >
                    Загрузить
                </Button>
            </Box>
        </Box>
    );
};

export default Main;
