interface IAppRoutes {
    list: IRoute[];
}

interface IRoute {
    key: string;
    path: string;
    component: React.ComponentClass<any, any>;
    exactPath?: boolean;
}