import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useMatch, useSearchParams} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import {Box, InputAdornment, TextField} from "@mui/material";
import {Clear} from "@mui/icons-material";

const Search = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [searchParams] = useSearchParams()
    const query = searchParams.get('q');
    const isMatch = useMatch('search')

    const [value, setValue] = useState(query);
    const handleChange = ({target: {value: val}}) => {
        setValue(val)
    }

    useEffect(() => {
        if (isMatch) return;
        setValue('');
    }, [location, isMatch])

    const handleSubmit = (e) => {
        console.log('handleSubmit')
        e.preventDefault();
        const val = value.trim()
        console.log('val', val)
        if (!val) return;
        navigate(`/search?q=${val}`)
    }

    const handleClickClear = () => {
        setValue('');
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <Box className="search-input flex">
                <TextField value={value} onChange={handleChange} variant='outlined'
                           placeholder='Поиск' InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{color: '#00e5bc'}}/>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment onClick={handleClickClear} sx={{cursor: 'pointer'}} position="start">
                            <Clear sx={{color: '#00e5bc'}}/>
                        </InputAdornment>
                    ),
                }} sx={{
                    input: {color: '#fff', fontSize: '20px'},
                    backgroundColor: "#25252C", borderRadius: '12px',
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: 'none'
                    },
                    '& .MuiFormLabel-root': {
                        fontSize: '199px',
                    },
                    width: '100%',
                    // fontSize: '28px'
                }}/>
                {/*<SearchIcon sx={{color: '#00e5bc'}}/>*/}
                {/*<input style={{borderRadius: '100px'}} type='text' name='search' value={value} onChange={handleChange}*/}
                {/*       placeholder='Поиск'/>*/}
            </Box>
        </form>
    );
};

export default Search;