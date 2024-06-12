import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Box, Button, TextField, useMediaQuery, Switch, FormGroup, FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import Video from '../../components/Videos/Video';
import { theme } from '../../utils/theme';

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
    const [linkText, setLinkText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const [isLinkDownload, setIsLinkDownload] = useState(false);
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
        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '100px', width: '100%' }}>
            <Box sx={{ color: '#fff' }}>
                <h2 style={{ fontFamily: 'Roboto, sans-serif' }}>Новая публикация</h2>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '15%', width: '100%', justifyContent: 'center' }}>
                {!file ? (
                    <Box
                        onDragEnter={(event) => {
                            !isLinkDownload && handleDrag(event);
                        }}
                        onDragOver={(event) => {
                            !isLinkDownload && handleDrag(event);
                        }}
                        onDragLeave={(event) => {
                            !isLinkDownload && handleLeave(event);
                        }}
                        onDrop={(event) => {
                            !isLinkDownload && handleDrop(event);
                        }}
                        sx={{
                            width: '20vw',
                            minHeight: '65vh',
                            border: dragActive
                                ? '2px dashed #00e5bc'
                                : isLinkDownload
                                ? '2px dashed #a4a4a4'
                                : '2px dashed #fff',
                            borderRadius: '16px',
                            '&:hover': {
                                border: isLinkDownload ? '2px dashed #a4a4a4' : '2px dashed #00e5bc',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: '#fff',
                                marginTop: !isLinkDownload ? '1vh' : '25vh',
                                textAlign: 'center',
                            }}
                        >
                            {isLinkDownload ? (
                                <Box>Можно загрузить либо через ссылку, либо выбрав файл</Box>
                            ) : (
                                <>
                                    <FileUploadOutlinedIcon
                                        sx={{ width: '50px', height: '50px', color: '#a4a4a4', marginTop: '5vh' }}
                                    />
                                    <Box sx={{ marginTop: '1%', fontFamily: `'Roboto', sans-serif` }}>
                                        Выберите или перетащите видео для загрузки
                                    </Box>
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
                                        <Box sx={{ margin: 0, fontFamily: `'Roboto', sans-serif` }}>Формат MP4</Box>
                                        <Box sx={{ margin: 0, fontFamily: `'Roboto', sans-serif` }}>
                                            Продолжительность видео от 3 до 60 секунд
                                        </Box>
                                        <Box sx={{ margin: 0, fontFamily: `'Roboto', sans-serif` }}>
                                            Размер менее 250МБ
                                        </Box>
                                    </Box>
                                    <Button
                                        component="label"
                                        role={undefined}
                                        variant="contained"
                                        sx={{ background: '#00e5bc', color: 'rgba(0, 0, 0, 0.9)', marginTop: '10vh' }}
                                        disabled={isLinkDownload}
                                    >
                                        Выберите файл
                                        <VisuallyHiddenInput
                                            type="file"
                                            onChange={handleChange}
                                            accept="video/mp4,video/x-m4v,video/*"
                                        />
                                    </Button>
                                </>
                            )}
                        </Box>
                    </Box>
                ) : (
                    <Box sx={{ position: 'relative' }}>
                        <Video url={imageUrl} height={'60vh'} width={'100%'} />
                        <DeleteIcon
                            onClick={handleDeleteVideo}
                            sx={{
                                position: 'absolute',
                                top: '1%',
                                right: '2%',
                                cursor: 'pointer',
                                color: '#fff',
                            }}
                        />
                    </Box>
                )}
                <Box sx={{ color: '#fff', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <TextField
                        variant="standard"
                        placeholder="Добавь описание"
                        value={descriptionText}
                        onChange={(e) => setDescriptionText(e.target.value)}
                        sx={{
                            input: { color: '#fff' },
                            '& .MuiInput-underline:before': { borderBottomColor: '#a4a4a4' },
                        }}
                    />
                    {!file && (
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        value={isLinkDownload}
                                        onChange={(e) => setIsLinkDownload(e.target.checked)}
                                    />
                                }
                                label="Загрузить с помощью ссылки?"
                            />
                        </FormGroup>
                    )}

                    {isLinkDownload && (
                        <TextField
                            variant="standard"
                            placeholder="Добавь ссылку"
                            value={linkText}
                            onChange={(e) => setLinkText(e.target.value)}
                            sx={{
                                input: { color: '#fff' },
                                '& .MuiInput-underline:before': { borderBottomColor: '#a4a4a4' },
                            }}
                        />
                    )}

                    <Button
                        variant="contained"
                        sx={{
                            background: '#00e5bc',
                            color: 'rgba(0, 0, 0, 0.9)',
                            marginTop: '40px',
                            '&:disabled': {
                                background: '#a4a4a4',
                            },
                        }}
                        disabled={!file && !linkText}
                    >
                        Опубликовать
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Upload;
