import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useMatch, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Box, InputAdornment, TextField, useMediaQuery } from '@mui/material';
import { getAutocomplete } from '../../api/searchFeed';
import useDebounce from '../../hooks/useDebounce';
import { theme } from '../../utils/theme';

const Search = ({ сssIcon, widthInput }) => {
    const mediaMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const isMatch = useMatch('search');
    const [optionsAutocomplete, setOptionsAutocomplete] = useState([]);

    const [value, setValue] = useState(query ?? '');

    const debouncedValue = useDebounce(value, 300);

    useEffect(() => {
        if (debouncedValue) {
            getAutocomplete(value.trim()).then((res) => setOptionsAutocomplete(res));
        }
    }, [debouncedValue]);

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
        navigate(`/search?q=${val}`);
        setOptionsAutocomplete([]);
    };

    const renderOption = (props, option) => {
        return (
            <li {...props} key={option}>
                <Box>{option}</Box>
            </li>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ position: 'relative' }}>
                <Autocomplete
                    freeSolo
                    options={optionsAutocomplete}
                    value={value}
                    renderOption={renderOption}
                    getOptionLabel={() => value}
                    onChange={(e) => setValue(e.target.innerText)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            autoFocus={!mediaMobile}
                            value={value}
                            onChange={handleChange}
                            variant="outlined"
                            placeholder="Поиск"
                            InputProps={{
                                ...params.InputProps,
                                startAdornment: (
                                    <InputAdornment position="start" onClick={handleSubmit}>
                                        <SearchIcon sx={{ color: '#00e5bc', cursor: 'pointer' }} />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{
                                input: { color: '#fff', fontSize: '20px' },
                                backgroundColor: '#25252C',
                                borderRadius: '40px 0 0 40px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': {
                                    color: '#00e5bc',
                                },
                                ...widthInput,
                                border: '1px solid black',
                            }}
                        />
                    )}
                />
                <Box sx={сssIcon}>
                    <SearchIcon sx={{ color: '#00e5bc', cursor: 'pointer' }} onClick={handleSubmit} />
                </Box>
            </Box>
        </form>
    );
};

export default Search;
