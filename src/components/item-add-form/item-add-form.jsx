import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {
    inpForm = React.createRef();

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.inpForm.current.value)
        this.inpForm.current.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='item-form'>
                <input type="text"
                       className='input-search'
                       placeholder="What needs to be done?"
                       ref={this.inpForm}
                />
                <button type='submit'
                        className='btn item-form__btn'>Add</button>
            </form>
        )
    }
}