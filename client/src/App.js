import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

const App = () => {
    return (
        <>
            <Navbar title='Contact-Manager' icon='fas fa-id-card-alt'/>
            <div className="container">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                </Switch>
            </div>
        </>
    );
}

export default App;
