import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const Spinner = ({ css }) => (
    <Box {...css}>
        <CircularProgress size={30} />
    </Box>
);

export default Spinner;