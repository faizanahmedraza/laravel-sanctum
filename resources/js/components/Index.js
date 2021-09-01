import React from "react";
import ReactDOM from "react-dom";
import {AppBar, Toolbar, Typography, Button, IconButton, makeStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Product from "./Product";
import '../../../public/css/app.css';

const Index = () => {
    return (
        <>
            {/*Header*/}
            <Router>
                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/contact-us">
                        <ContactUs/>
                    </Route>
                    <Route exact path="/products">
                        <Product/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                </Switch>
            </Router>
        </>
    )
        ;
}
export default Index;

if (document.getElementById('root')) {
    ReactDOM.render(
        <Index/>,
        document.getElementById('root')
    );
}


