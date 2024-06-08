import React from 'react';
import {CircularProgress} from "@mui/material";

const Spinner = () => (
    <div className="spinner flex flex-center">
        <CircularProgress size={30}/>
    </div>
)

export default Spinner;