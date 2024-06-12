import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useMatch, useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import { getAutocomplete } from '../../api/searchFeed';
import useDebounce from '../../hooks/useDebounce';

const Search = () => {
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
    };

    const renderOption = (props, option) => {
        return (
            <li {...props} key={props.key}>
                <Box>{option}</Box>
            </li>
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box>
                <Autocomplete
                    freeSolo
                    options={optionsAutocomplete}
                    value={value}
                    renderOption={renderOption}
                    onChange={(e) => setValue(e.target.innerText)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            autoFocus
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
                                borderRadius: '12px',
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                                '& .MuiAutocomplete-endAdornment .MuiSvgIcon-root': {
                                    color: '#00e5bc',
                                },
                                width: '100%',
                            }}
                        />
                    )}
                />
            </Box>
        </form>
    );
};

export default Search;
