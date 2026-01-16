import Home from '../app/pages/Home';
import FavuritePage from '../app/pages/FevoritePage';
export interface AppRoute {
    path?: string;
    element?: React.ComponentType<any>;
    title: string;
    showInNav?: boolean;
    children?: AppRoute[];
}

export const routes: AppRoute[] = [
    {
        path: '/',
        element: Home,
        title: 'All Stations',
        showInNav: true,
    },
    {
        path: '/favorite',
        title: 'Your Favorites',
        element: FavuritePage,
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
