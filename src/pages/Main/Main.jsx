import React from 'react';
import {Box} from "@mui/material";
import LOGO from "../../assets/logo-full.svg";
import Search from "../../components/Search/Search";

const Main = () => {
    return (
        <Box sx={{ height: '100%', display: 'grid', placeItems: 'center', alignContent: 'space-between'}}>
            <Box >
                <img src={LOGO} alt="YAPPY" height={150} style={{ marginBottom: '50px' }} />
                <Search />
            </Box>
        </Box>

    );
};

export default Main;