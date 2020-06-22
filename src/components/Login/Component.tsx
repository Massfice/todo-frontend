import React from 'react';
import { connect } from "react-redux";
import LoginStateFunction from "./LoginStateFunction";
import LoginDispatchFunction from "./LoginDispatchFunction";

import Credentials from '../../types/Credentials';
import Errors from '../Errors/Component';

const Component = (props: any) => {
    const login = (event : any) => {
        event.preventDefault();

        const credentials : Credentials = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        props.handleLogin(credentials);
    };

    return (
        <div key="login">
            <form id='login_form' onSubmit={login}>
                Nazwa Użytkownika: <input type='text' name='username'/> |
                Hasło: <input type='password' name='password'/>
                <input type='submit' value='Zaloguj się'/>
            </form>
            <Errors/>
        </div>
    );
}

export default connect(LoginStateFunction, LoginDispatchFunction)(Component);