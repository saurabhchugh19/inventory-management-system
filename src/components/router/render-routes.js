import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "../../pages/dashboard";
import ManageInventory from "../../pages/manage-inventory";

const RenderRoutes = () => {
    return (
        <main>
            <Switch>
                {routes.map(route => <Route key={route.component} {...route} />)}
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
    {
        path: "/manage-inventory",
        exact: true,
        component: ManageInventory
    },
    {
        path: "*",
        exact: true,
        component: Dashboard
    }
];