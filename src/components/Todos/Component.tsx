import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Redirect, NavLink } from 'react-router-dom';

import TodosStateFunction from "./TodosStateFunction";
import TodosDispatchFunction from "./TodosDispatchFunction";

import TodoComponent from "../Todo/Component";
import TodoCreate from "../TodoCreate/Component";
import "./Component.css";

import Todo from '../../types/Todo';
import TodoOperation from '../../types/TodoOperation';

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

    const toggle = (key: number) => {
        const todo : Todo = props.todos[key];

        if(todo !== null) {
            todo.checked = !todo.checked;

            const todoOperation = {
                todo: todo,
                operation: 'patch',
                redirect: null,
                token: props.token
            } as TodoOperation

            props.handleToggleTodo(todoOperation);
        }
    }

    return (
        <Router>
            <Route exact path="/edit/:todoid" render={(matchProps) => <TodoComponent data={{
                    todos: props.todos,
                    match: matchProps,
                }}/>}/>
            <Route exact path="/list">
                <TodoCreate/>
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
                            {props.todos.map((todo: Todo, key: number) => {
                                    return (
                                        <tr key={todo.id + "_body"}>
                                            <td className="Cell_big" key={todo.id + "_text"}>{strikeText(todo.text, todo.checked)}</td>
                                            <td className="Cell_small" key={todo.id + "_checked"}><input type="checkbox" checked={todo.checked} key={todo.id + "_checkbox"} onClick={() => {
                                                toggle(key);
                                            }} readOnly={true}/></td>
                                            <td className="Cell_small" key={todo.id + "_edit"}><NavLink exact to={"/edit/" + key}>Edit</NavLink></td>
                                        </tr>
                                    )
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