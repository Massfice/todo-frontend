import React from 'react';
import {connect, useSelector} from 'react-redux';
import { TodoState } from '../store/TodoState';
import { Todo } from '../models/todo';
import { addTodo } from '../store/TodoActions';

const TodoList = (props: any) => {
    const onAddHandler = () => {
        console.log(props);
    }

    // const todos = useSelector((state: TodoState) => state.todos);
    const todos = props.todos;

    console.log(todos);
    let todoComponents; 
    if(todos){
        todoComponents = todos.map((todo: Todo, index: number) => (<div key={index}>{todo.asd}</div>))
    }

    return (
        <div>
        {todoComponents}
        <button onClick={props.onAddTodo}>Click</button>
        </div>
      );
}

const mapStateToProps = (state: TodoState): {todos: Todo[]} => {
    return {todos: state.todos};
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddTodo: () => {
            dispatch(addTodo({asd: 'asd'}))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);