import Home from '../app/pages/Home';
import FavuritePage from '../app/pages/FevoritePage';
import { FaHeart, FaHome } from 'react-icons/fa';
import Bollywood from '../app/pages/Bollywood';

export interface AppRoute {
    path?: string;
    element?: React.ComponentType<any>;
    title: string;
    icon?: React.ComponentType<any>;
    showInNav?: boolean;
    children?: AppRoute[];
}

export const routes: AppRoute[] = [
    {
        path: '/',
        element: Home,
        title: 'All Stations',
        icon: FaHome,
        showInNav: true,
    },
    {
        path: '/favorite',
        title: 'Your Favorites',
        element: FavuritePage,
        icon: FaHeart,
        showInNav: true,
    },
        {
        path: '/bollywood',
        title: 'Bollywood',
        element: Bollywood,
        icon: FaHeart,
        showInNav: true,
    }
//    {
//         path: '/watchlist',
//         title: 'Watchlist',
//         showInNav: true,
//     },
//    {
//         path: '/watched',
//         title: 'Watched',
//         showInNav: true,
//     },

//     {
//         title: 'Other',
//         showInNav: true,
//         path: '',
//         children: [
//             {
//                 path: '/',
//                 title: 'React Hooks',
//                 showInNav: true,
//             },

//         ]
//     }

];
