import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Search from "../Search/Search";
import LOGO from "../../assets/logo-full.svg"
import {Box, Button, Tooltip} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    // const menuElements = [
    //     {
    //         title: 'Главная',
    //         icon: <HomeOutlinedIcon sx={{color: '#00e5bc', cursor: 'pointer'}}/>
    //     },
    //     {
    //         title: 'Подписчики',
    //         icon: <PeopleAltOutlinedIcon sx={{color: '#00e5bc', cursor: 'pointer'}}/>
    //     },
    //     {
    //         title: 'Тренды',
    //         icon: <WhatshotOutlinedIcon sx={{color: '#00e5bc', cursor: 'pointer'}}/>
    //     },
    //     {
    //         title: 'Подборки',
    //         icon: <StarBorderOutlinedIcon sx={{color: '#00e5bc', cursor: 'pointer'}}/>
    //     }
    // ]
    const navigate = useNavigate();
    return (
        <header style={{
            display: 'flex',
            width: '100%',
            borderBottomWidth: '1px',
            position: 'fixed',
            zIndex: '30',
            marginTop: '10px'
        }}>
            <Box sx={{
                display: 'flex',
                // paddingLeft: '1rem',
                // paddingRight: '1rem',
                // gap: '1.5rem',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                marginLeft: '2%',
            }}>
                <Box className="logo">
                    <Link to='/'>
                        <img src={LOGO} alt="MAIN_LOGO" height={30}/>
                    </Link>
                </Box>
                <Box sx={{width: '45%', marginLeft: '15%'}}>
                    <Search/>
                </Box>
                <Box>
                    <Button variant="contained"
                            onClick={() => {
                                navigate('/upload')
                            }}
                            startIcon={<AddIcon />}
                            sx={{background:'#00e5bc', color: 'rgba(0, 0, 0, 0.9)' }}
                    >Загрузить</Button>
                </Box>
            </Box>
        </header>
    );
};

export default Header;