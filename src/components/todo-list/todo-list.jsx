import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css';

const TodoList = ({todos, onDelete, onToggleImportant, onToggleDone}) => {

    const elements = todos.map(item => {
        return <li className='list-group-item' key={item.id}>
            <TodoListItem
                {...item}
                onDelete={() => onDelete(item.id)}
                onToggleImportant={() => onToggleImportant(item.id)}
                onToggleDone={() => onToggleDone(item.id)}/>
        </li>
    })

    return (
        <ul className='todo-list'>
            {elements}
        </ul>
    )
}
export default TodoList;