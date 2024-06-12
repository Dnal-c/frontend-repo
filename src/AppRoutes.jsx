import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchFeed from './pages/SeacrhFeed/SearchFeed';
import Main from './pages/Main/Main';
import Upload from './pages/Upload/Upload';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/search" element={<SearchFeed />} />
            <Route path="/upload" element={<Upload />} />
        </Routes>
    );
};

export default AppRoutes;