import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from "react-router-dom";
import {App} from './components/App';

import "./assets/css/global.css";
import "./assets/css/adnd.css";
import "./assets/css/dnd3.css";
import "./assets/css/names.css";



ReactDOM.render (
    <BrowserRouter>
        <Route path="/" component={App} /> 
    </BrowserRouter>,
    document.getElementById("root")
)


