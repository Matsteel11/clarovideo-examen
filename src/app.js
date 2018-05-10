// Dependencias
import React from 'react'
import { render } from "react-dom";

// Services
//import { BrowserRouter as Router } from 'react-router-dom';
import { get } from './services/api.service';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Routes
import AppRoutes from './routes';

// Components
import Home from './pages/home/home';
import Detail from "./pages/detail/detail";

const home = document.getElementById('home');

render(
    <Router>
        <Switch>
            <Route path="/" component={Home} />
            <Route path="/detail" component={Detail} />
        </Switch>
    </Router>
    , home);


