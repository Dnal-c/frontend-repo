import UserVideos from "../components/User/UserVideos";
import UserLiked from "../components/User/UserLiked";

export const REGION = 'RU';

export const USER_TABS = [
    {
        slug: 'videos',
        title: 'Videos',
        content: <UserVideos />
    },
    {
        slug: 'liked',
        title: 'Liked',
        content: <UserLiked />
    },
];
