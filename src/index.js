import React from "react";
import { render } from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from './components/App.js';
import "./index.css";
import {Provider as ReduxProvider } from 'react-redux';
import configureStore from "./redux/ConfigureStore";

const store = configureStore();

render(
    //ReduxProvider ensures all the child elements have access to store data
    <ReduxProvider store = {store}>
    <Router>
    <App />
    </Router>
    </ReduxProvider>,
    document.getElementById("app")
);
