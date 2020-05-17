import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../../pages/dashboard";

const RenderRoutes = () => {
    return (
        <main>
            <Switch>
                {routes.map((route, index) => <Route key={route.component} {...route} />)}
            </Switch>
        </main>
    );
};

export default RenderRoutes;

const routes = [
    {
        path: "/",
        exact: true,
        component: Dashboard
    },
];