import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import LOGO from '../../assets/logo-full.svg';
import { Box, Button, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header
            style={{
                display: 'flex',
                width: '100%',
                borderBottomWidth: '1px',
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
                    marginLeft: '2%',
                }}
            >
                <Box className="logo">
                    <Link to="/">
                        <img src={LOGO} alt="MAIN_LOGO" height={30} />
                    </Link>
                </Box>
                <Box sx={{ width: '45%', marginLeft: '15%' }}>
                    <Search />
                </Box>
                <Box>
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
        </header>
    );
};

export default Header;
