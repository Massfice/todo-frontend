import React from 'react';
import { connect } from "react-redux";
import RegisterStateFunction from "./RegisterStateFunction";
import RegisterDispatchFunction from "./RegisterDispatchFunction";

import Errors from '../Errors/Component';
import RegisterCredentials from '../../types/RegisterCredentials';
import Credentials from '../../types/Credentials';
import User from '../../types/User';

const Component = (props: any) => {
    const register = (event : any) => {
        event.preventDefault();

        const credentials : RegisterCredentials = {
            credentials: {
                username: event.target.username.value,
                password: event.target.password.value
            } as Credentials,
            user: {
                name: event.target.name.value,
                surname: event.target.surname.value,
                email: event.target.username.value
            } as User,
            repeat: event.target.repassword.value
        };

        props.handleRegister(credentials);
    };

    return (
        <div key="register">
            <form id='register_form' onSubmit={register}>
                Nazwa Użytkownika: <input type='text' name='username'/> |
                Hasło: <input type='password' name='password'/> |
                Powtórz: <input type='password' name='repassword'/><br/>
                Imię:  <input type='text' name='name'/> | Nazwisko: <input type='text' name='surname'/>
                <input type='submit' value='Zarejestruj się'/>
            </form>
            <Errors/>
        </div>
    )
}

export default connect(RegisterStateFunction, RegisterDispatchFunction)(Component);