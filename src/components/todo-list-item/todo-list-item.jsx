import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const {label, done, important, onDelete, onToggleImportant, onToggleDone} = this.props;

        let classNames = 'todo-list-item';
        if(done) classNames += ' done';
        if(important) classNames += ' important';

        return (
            <>
                <span className={classNames }
                      onClick={onToggleDone}>{ label }
                </span>
                <span>
                    <span onClick={onDelete}>Del</span>
                    <span className='btn'
                          onClick={onToggleImportant}>Important</span>
                </span>
            </>
        )
    }
}