import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useMatch, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, NativeSelect, TextField } from '@mui/material';
import { Clear } from '@mui/icons-material';

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const isMatch = useMatch('search');

    const select = [
        { label: 'основной', link: `/search?q` },
        { label: 'mock', link: `/mockSearch?q` },
    ];

    const [selectData, setSelectData] = useState(select[0].link);

    const [value, setValue] = useState(query ?? '');

    const handleChange = ({ target: { value: val } }) => {
        setValue(val);
    };

    useEffect(() => {
        if (isMatch) return;
        setValue('');
    }, [location, isMatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const val = value.trim();
        if (!val) return;
        navigate(`${selectData}=${val}`);
    };

    const handleClickClear = () => {
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <TextField
                    value={value}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Поиск"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon sx={{ color: '#00e5bc' }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment onClick={handleClickClear} sx={{ cursor: 'pointer' }} position="start">
                                <Clear sx={{ color: '#00e5bc' }} />
                            </InputAdornment>
                        ),
                    }}
                    sx={{
                        input: { color: '#fff', fontSize: '20px' },
                        backgroundColor: '#25252C',
                        borderRadius: '12px',
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                        '& .MuiFormLabel-root': {
                            fontSize: '199px',
                        },
                        width: '100%',
                    }}
                />
            </Box>
        </form>
    );
};

export default Search;
