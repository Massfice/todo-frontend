import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';

import TodosStateFunction from "./TodosStateFunction";
import TodosDispatchFunction from "./TodosDispatchFunction";

import TodoComponent from "../Todo/Component";
import "./Component.css";

import Todo from '../../types/Todo';

const Component = (props: any) => {
    const strikeText = (text: string, strike: boolean) => {
        if(strike) {
            return (
                <>
                <s>{text}</s>
                </>
            ) 
        } else {
            return text;
        }
    }

    return (
        <Router>
            <Route exact path="/edit/:todoid" render={(matchProps) => <TodoComponent data={{
                    todos: props.todos,
                    match: matchProps,
                }}/>}/>
            <Route exact path="/list">
                <div key="todos">
                    <table className="TodoList">
                        <thead>
                            <tr key="head">
                                <th className="Cell_big">Do Zrobienia</th>
                                <th className="Cell_small">Zrobione</th>
                                <th className="Cell_small">Edycja</th>
                            </tr>
                        </thead>
                        <tbody>
                            <>
                            {props.todos.map((todo: Todo | null, key: number) => {
                                if(todo !== null) {
                                    return (
                                        <tr key={todo.id + "_body"}>
                                            <td className="Cell_big" key={todo.id + "_text"}>{strikeText(todo.text, todo.checked)}</td>
                                            <td className="Cell_small" key={todo.id + "_checked"}><input type="checkbox" checked={todo.checked} key={todo.id + "_checkbox"}/></td>
                                            <td className="Cell_small" key={todo.id + "_edit"}><NavLink exact to={"/edit/" + key}>Edit</NavLink></td>
                                        </tr>
                                    )   
                                }
                                else {
                                    return (
                                        <React.Fragment key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) + "_checked"}>

                                        </React.Fragment>
                                    );
                                }
                            })}
                            </>
                        </tbody>
                    </table>
                </div>
            </Route>
            <Route exact path="/:slug">
                <Redirect to="/list"/>
            </Route>
            <Route exact path="/">
                <Redirect to="/list"/>
            </Route>
        </Router>
    );
}

export default connect(TodosStateFunction, TodosDispatchFunction)(Component);