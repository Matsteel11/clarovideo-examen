import React from 'react'
import { render } from "react-dom";
import { get } from './services/api.service'
import Home from './pages/home/home'

const home = document.getElementById('home');
var t = get().then((respuesta) => {
    console.log(respuesta)
    render(<Home data={respuesta}/>, home);
});

