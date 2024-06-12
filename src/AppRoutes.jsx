import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import SearchFeed from './components/Search/SearchFeed';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/search" element={<SearchFeed />} />
            <Route path="/upload" element={<Upload />} />
        </Routes>
    );
};

export default AppRoutes;