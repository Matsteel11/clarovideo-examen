// Dependencias
import React from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import App from './app';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';

const AppRoutes = () =>{
    <App>
        <Switch>
            <Route path="/" component={Home}/>
            <Route path="/detail" component={Detail}/>
        </Switch>
    </App>
}
    

export default AppRoutes;

