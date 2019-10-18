import React from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

const App = () => {
    return (
        <AuthState>
            <ContactState>
                <>
                    <Navbar title='Contact-Manager' icon='fas fa-id-card-alt'/>
                    <div className="container">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/about' component={About}/>
                            <Route exact path='/register' component={Register}/>
                            <Route exact path='/login' component={Login}/>
                        </Switch>
                    </div>
                </>
            </ContactState>
        </AuthState>
    );
}

export default App;
