import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import Video from '../../components/Videos/Video';

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
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState();
    const [imageUrl, setImageUrl] = useState();
    const fileReader = new FileReader();

    useLayoutEffect(() => {
        fileReader.onloadend = () => {
            setImageUrl(fileReader.result);
        };
    }, [fileReader]);

    const handleChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        fileReader.readAsDataURL(file);
        setFile(file);
    };

    const handleDrag = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files[0];
        fileReader.readAsDataURL(file);
        setFile(file);
    };

    const handleDeleteVideo = () => {
        setFile(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '100px' }}>
            <Box sx={{ color: '#fff' }}>
                <h2>Новая публикация</h2>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
                {!file ? (
                    <Box
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleLeave}
                        onDrop={handleDrop}
                        sx={{
                            width: '40%',
                            minHeight: '65vh',
                            border: dragActive ? '2px dashed #00e5bc' : '2px dashed #fff',
                            borderRadius: '16px',
                            '&:hover': {
                                border: '2px dashed #00e5bc',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: '#fff',
                                marginTop: '1vh',
                                textAlign: 'center',
                            }}
                        >
                            <FileUploadOutlinedIcon
                                sx={{ width: '50px', height: '50px', color: '#a4a4a4', marginTop: '5vh' }}
                            />
                            <p style={{ marginTop: '1%' }}>Выберите или перетащите видео для загрузки</p>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: '#a4a4a4',
                                    fontSize: '12px',
                                    marginTop: '5vh',
                                }}
                            >
                                <p style={{ margin: 0 }}>Формат MP4</p>
                                <p style={{ margin: 0 }}>Продолжительность видео от 3 до 60 секунд</p>
                                <p style={{ margin: 0 }}>Размер менее 250МБ</p>
                            </Box>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                sx={{ background: '#00e5bc', color: 'rgba(0, 0, 0, 0.9)', marginTop: '10vh' }}
                            >
                                Выберите файл
                                <VisuallyHiddenInput
                                    type="file"
                                    onChange={handleChange}
                                    accept="video/mp4,video/x-m4v,video/*"
                                />
                            </Button>
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ position: 'relative' }}>
                        <Video url={imageUrl} />
                        <DeleteIcon
                            onClick={handleDeleteVideo}
                            sx={{
                                position: 'absolute',
                                top: '16px',
                                right: '16px',
                                cursor: 'pointer',
                                color: '#fff',
                            }}
                        />
                    </Box>
                )}
                <Box sx={{ color: '#fff', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <TextField variant="standard" placeholder="Добавь описание" sx={{ input: { color: '#fff' } }} />
                    <TextField variant="standard" placeholder="Добавь ссылку" sx={{ input: { color: '#fff' } }} />
                    <Button
                        variant="contained"
                        sx={{ background: '#00e5bc', color: 'rgba(0, 0, 0, 0.9)', marginTop: '40px' }}
                    >
                        Опубликовать
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Upload;
