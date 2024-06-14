import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import copy from 'copy-to-clipboard';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const SuccessUpload = ({ open, handleClose, result }) => {
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
                        maxWidth: '80vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                    },
                }}
            >
                <DoneOutlinedIcon sx={{ marginTop: '2%', width: '50px', height: '50px' }} />
                <DialogTitle id="alert-dialog-title">{'Видео успешно загрузилось!'}</DialogTitle>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>description_ru</StyledTableCell>
                                <StyledTableCell align="right">short_description_ru</StyledTableCell>
                                <StyledTableCell align="right">description_en</StyledTableCell>
                                <StyledTableCell align="right">short_description_en</StyledTableCell>
                                <StyledTableCell align="right">voice_text</StyledTableCell>
                                <StyledTableCell align="right">tags</StyledTableCell>
                                <StyledTableCell align="right">link</StyledTableCell>
                                <StyledTableCell align="right">description_ru_vector</StyledTableCell>
                                <StyledTableCell align="right">tags_vector</StyledTableCell>
                                <StyledTableCell align="right">voice_vector</StyledTableCell>
                                <StyledTableCell align="right">hash</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <StyledTableCell align="right">{result.description_ru}</StyledTableCell>
                                <StyledTableCell align="right">{result.short_description_ru}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {result.description_en}
                                </StyledTableCell>
                                <StyledTableCell align="right">{result.short_description_en}</StyledTableCell>
                                <StyledTableCell align="right">{result.voice_text}</StyledTableCell>
                                <StyledTableCell align="right">{result.tags}</StyledTableCell>
                                <StyledTableCell align="right">
                                    {result.link}
                                    <FileCopyIcon onClick={() => copy(result.link)} sx={{ cursor: 'pointer' }} />
                                </StyledTableCell>
                                <StyledTableCell align="right">{result.description_ru_vector}</StyledTableCell>
                                <StyledTableCell align="right">{result.tags_vector}</StyledTableCell>
                                <StyledTableCell align="right">{result.voice_vector}</StyledTableCell>
                                <StyledTableCell align="right">{result.hash}</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>
                        Понятно!
                    </Button>
                </DialogActions>
                <CloseIcon
                    onClick={handleClose}
                    sx={{ cursor: 'pointer', position: 'absolute', top: '1%', right: '1%' }}
                />
            </Dialog>
        </Box>
    );
};

export default SuccessUpload;
