import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Feed from "./pages/Feed/Feed";
import SearchFeed from "./components/Search/SearchFeed";
import User from "./components/User/User";
import SingleVideo from "./components/Videos/SingleVideo";
import Qwerty from "./components/swiper/Qwerty";
import Main from "./pages/Main/Main";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/feed' element={<Feed/>}/>
            {/*<Route path='/qwerty' element={<Qwerty/>}/>*/}
            <Route path='/search' element={<SearchFeed/>}/>
            <Route path='/user/:uniqueId' element={<User/>}/>
            <Route path='/video/:id' element={<SingleVideo/>}/>
        </Routes>
    );
};

export default AppRoutes;