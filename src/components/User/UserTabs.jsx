import React, {useState} from 'react';
import {USER_TABS} from "../../utils/constants";
import LockIcon from '@mui/icons-material/Lock'
import {Alert} from "@mui/material";

const UserTabs = ({openFavorite}) => {
    const [activeTab, setActiveTab] = useState(USER_TABS[0]);
    return (
        <div className='user-tabs'>
            <ul className="user-tabs__items flex flex-center">
                {USER_TABS.map((tab) => {
                    const {slug, title} = tab;
                    return (
                        <li key={slug} onClick={() => setActiveTab(tab)}
                            className={`flex flex-center ${activeTab.slug === slug ? 'active' : ''}`}>
                            {!openFavorite && slug === 'liked' && (<LockIcon/>)}
                            <span>{title}</span>
                        </li>
                    )
                })}
            </ul>
            <div className="user-tabs__content">
                {!openFavorite && activeTab.slug === 'liked' ?
                    <Alert severity='warning'>This user's liked videos are private</Alert> : (activeTab.content)
                }
            </div>
        </div>
    );
};

export default UserTabs;