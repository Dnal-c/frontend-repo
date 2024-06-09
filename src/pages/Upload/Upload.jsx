import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import { styled } from '@mui/material/styles';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const Upload = () => {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '100px'}}>
            <Box sx={{color: '#fff'}}>
                <h2>Новая публикация</h2>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: '30px'}}>
                <Box sx={{width: '200px', height: '400px', border: '2px dashed #fff', borderRadius: '16px',
                    '&:hover': {
                        border: '2px dashed #00e5bc'
                    }}}>
                        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#fff', marginTop: '15%'}}>
                            <FileUploadOutlinedIcon sx={{width: '50px', height: '50px'}} />
                            <p style={{fontSize: '18px'}}>Выберите или перетащите видео для загрузки</p>
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <p>Формат MP4</p>
                                <p>Продолжительность видео от 3 до 60 секунд</p>
                                <p>Размер менее 250МБ</p>
                            </Box>
                            <Button component="label" role={undefined} variant="contained" sx={{background:'#00e5bc', color: 'rgba(0, 0, 0, 0.9)', marginTop: '10px' }}>
                                Выберите файл
                                <VisuallyHiddenInput type='file'/>
                            </Button>
                        </Box>
                    </Box>
                <Box sx={{color: '#fff', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <TextField variant="standard" placeholder='Добавь описание' sx={{input: {color: '#fff'}}}/>
                    <TextField variant="standard" placeholder='Добавь ссылку' sx={{input: {color: '#fff'}}}/>
                    <Button variant="contained" sx={{background:'#00e5bc', color: 'rgba(0, 0, 0, 0.9)', marginTop: '40px' }}>
                        Опубликовать
                    </Button>
                </Box>
            </Box>
        </Box>

    );
};

export default Upload;