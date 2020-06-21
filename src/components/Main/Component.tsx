import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';
// import { IndexRoute } from 'react-router';

import MainStateFunction from "./MainStateFunction";
import MainDispatchFunction from "./MainDispatchFunction";
import Login from "../Login/Component";
import Register from "../Register/Component";

const Component = (props: any) => {
    useEffect(() => {
        props.handleRefreshState();
    });

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
            </Router>
        );
    } else {
        return (
            <div key="main">Zalogowany użytkownik</div>
        );        
    }
}

export default connect(MainStateFunction, MainDispatchFunction)(Component);