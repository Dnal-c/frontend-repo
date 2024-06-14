import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
import { Box } from '@mui/material';

const ErrorUpload = ({ open, handleClose, text }) => {
    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{
                    '.MuiDialog-paper': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    },
                }}
            >
                <GppMaybeOutlinedIcon sx={{ marginTop: '5%', width: '50px', height: '50px' }} />
                <DialogTitle id="alert-dialog-title">{'Упс... Не удалось загрузить видео:( '}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Попробуй еще раз
                    </Button>
                </DialogActions>
                <CloseIcon
                    onClick={handleClose}
                    sx={{ cursor: 'pointer', position: 'absolute', top: '0px', right: '0px' }}
                />
            </Dialog>
        </Box>
    );
};

export default ErrorUpload;
