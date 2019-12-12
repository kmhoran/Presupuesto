import HomePage from '../containers/HomePage';
import TransactionPage from '../containers/TransactionPage';
import routeKeys from './keys';

const routes: IAppRoutes = {
    list: [
        {
            key: routeKeys.root,
            path: '/',
            exactPath: true,
            component: HomePage
        }, {
            key: routeKeys.transactions,
            path: '/transactions',
            component: TransactionPage
        }

    ]
};


export default routes;