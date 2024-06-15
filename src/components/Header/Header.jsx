import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import LOGO from '../../assets/logo-full.svg';
import { Box, Button, useMediaQuery, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { theme } from '../../utils/theme';

const Header = () => {
    const mediaMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    return (
        <header
            style={{
                display: 'flex',
                width: '100%',
                position: 'fixed',
                zIndex: '30',
                marginTop: '10px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    margin: '0 2%',
                    [theme.breakpoints.down('md')]: {
                        margin: '1%',
                        justifyContent: 'flex-start',
                    },
                }}
            >
                {!mediaMobile && (
                    <Box>
                        <Link to="/">
                            <img src={LOGO} alt="MAIN_LOGO" height={30} />
                        </Link>
                    </Box>
                )}
                <Box
                    sx={{
                        width: '63%',
                        marginLeft: '1%',
                        [theme.breakpoints.down('md')]: {
                            width: '85%',
                            marginRight: '1%',
                        },
                    }}
                >
                    <Search
                        сssIcon={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            backgroundColor: '#33333a',
                            top: '0px',
                            left: '90%',
                            borderRadius: '0 40px 40px 0',
                            border: '1px solid black',
                            padding: '19px',
                            width: '4%',
                            [theme.breakpoints.down('sm')]: {
                                left: '75%',
                            },
                        }}
                        widthInput={{
                            width: '90%',
                            [theme.breakpoints.down('sm')]: {
                                width: '75%',
                            },
                        }}
                    />
                </Box>
                <Box>
                    {!mediaMobile ? (
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
                    ) : (
                        <IconButton
                            variant="contained"
                            onClick={() => {
                                navigate('/upload');
                            }}
                            sx={{ width: '5rem', height: '5rem' }}
                        >
                            <AddIcon
                                sx={{
                                    fontSize: '2rem',
                                    borderRadius: '5px',
                                    padding: '25%',
                                    color: '#000000E5',
                                    backgroundColor: '#00e5bc',
                                }}
                            />
                        </IconButton>
                    )}
                </Box>
            </Box>
        </header>
    );
};

export default Header;
