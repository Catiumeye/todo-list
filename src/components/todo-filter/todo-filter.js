import React, { Component } from 'react';
import './todo-filter.css';

export default class TodoFilter extends Component {

    buttons = [
        {name : 'all', label : 'All'},
        {name : 'active', label : 'Active'},
        {name : 'done', label : 'Done'}
    ]

    render() {
        const { toggleFilter, filter } = this.props;
        const buttonsRender = this.buttons.map(({name, label}) => {
            let classes = 'btn';
            filter === name ? classes += ' btn-info' : classes += ' btn-filter';
            return (
                <button className={classes}
                        key={name}
                        onClick={() => toggleFilter(name)}>{label}</button>
            )
        })


        return (
            <div className='btn-group'>
                {buttonsRender}
            </div>
        )
    }


}

