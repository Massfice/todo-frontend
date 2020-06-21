import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
// import { IndexRoute } from 'react-router';

import MainStateFunction from "./MainStateFunction";
import MainDispatchFunction from "./MainDispatchFunction";
import Login from "../Login/Component";
import Register from "../Register/Component";

const Component = (props: any) => {
    let handleRefreshState = props.handleRefreshState;
    useEffect(() => {
        handleRefreshState();
    },[handleRefreshState]);

    const logout = () => {
        props.handleLogout(props.token);
    }

    if(props.user === null) {
        return (
            <Router>
                <NavLink exact to='/login'>Logowanie</NavLink> | 
                <NavLink exact to='/register'>Rejestracja</NavLink>

                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
                <Route exact path='/'>
                    <Redirect to='/login'/>
                </Route>
                <Route exact path='/:slug'>
                    <Redirect to='/login'/>
                </Route>
            </Router>
        );
    } else {
        return (
            <div key="main">
                <button onClick={logout}>Wyloguj się</button> <br/>
                Witaj, {props.user.name} {props.user.surname} [ {props.user.email} ]
            </div>
        );        
    }
}

export default connect(MainStateFunction, MainDispatchFunction)(Component);