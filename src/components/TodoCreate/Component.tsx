import React from 'react';
import { connect } from "react-redux";
import TodoCreateStateFunction from "./TodoCreateStateFunction";
import TodoCreateDispatchFunction from "./TodoCreateDispatchFunction";

import Errors from '../Errors/Component';
import TodoOperation from '../../types/TodoOperation';
import Todo from '../../types/Todo';

const Component = (props: any) => {
    const form_Name = 'todoCreate_Form';
    const form_Text = "text";

    const create = (event: any) =>{
        event.preventDefault();

        const todo = {
            id: null,
            text: event.target[form_Text].value,
            checked: false,
        } as Todo;

        const todoOperation = {
            todo: todo,
            operation: 'post',
            redirect: null,
            token: props.token
        } as TodoOperation;

        props.handleCreateTodo(todoOperation);
    }

    return (
        <div key="todo_create">
            <h1>Dodaj pozycję:</h1>
            <form id={form_Name} onSubmit={create}>
                <div key="todo_form_textarea">
                <textarea name={form_Text} form={form_Name} rows={8} cols={50}/>
                </div>
                <input type="submit" value="Dodaj"/>
            </form>
            <Errors/>
        </div>
    );
}

export default connect(TodoCreateStateFunction, TodoCreateDispatchFunction)(Component);