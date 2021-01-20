import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import TodoFilter from "../todo-filter/todo-filter.js";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";
import 'normalize.css';
import './app.css';

export default class App extends Component {

    maxID = 0;

    state = {
        items: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Drink Балтика 9'),
            this.createTodoItem('Fuck hot girls')
        ],
        term: '',
        filter: 'all' //all, active, done
    }

    createTodoItem(label) {
        return {
            label,
            done : false,
            important : false,
            id : this.maxID++
        }
    }

    deleteItem = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex( (el) => el.id === id );

            const newArray = [
                ...items.slice(0, idx),
                ...items.slice(idx + 1)
            ];

            return {
                items : newArray
            }
        })
    }
    addItem = (text) => {
        const newArrayItem = this.createTodoItem(text)

        this.setState(({items}) => {
            return{
                items : [...items, newArrayItem]
            }
        })
    }

    onToggleProperty = (array, id, propName) => {
        const idx = array.findIndex((el) => el.id === id);
        const oldItem = array[idx];
        const newItem = {...oldItem, [propName] : !oldItem[propName]}

        return [
            ...array.slice(0, idx),
            newItem,
            ...array.slice(idx + 1)
        ];
    }
    onToggleImportant = (id) => {
        this.setState(({items}) => {
            return {
                items : this.onToggleProperty(items, id, 'important')
            }
        })
    }
    onToggleDone = (id) => {
        this.setState(({items}) => {
            return {
                items : this.onToggleProperty(items, id, 'done')
            }
        })
    }

    search = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter((elem) => {
            return elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    changeTerm = (text) => {
        this.setState(() => {
            return {
                term : text
            }
        })
    }

    todoFilter = (items, forFilter) => {
        switch (forFilter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }
    toggleFilter = (filter) => {
        this.setState({filter})
    }

    render() {
        const {items, term, filter} = this.state;

        const doneCounter = items.filter((el) => el.done).length
        const todo = items.length - doneCounter;

        const visibleItems = this.todoFilter(this.search(items, term), filter)
        return (
            <div className='container'>
                <AppHeader todo={todo}
                           done={doneCounter}/>
                <div className='search-panel'>
                        <SearchPanel term={this.changeTerm}/>
                        <TodoFilter filter={filter}
                                    toggleFilter={this.toggleFilter}/>
                </div>
                <TodoList todos={visibleItems}
                          onDelete={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <ItemAddForm
                    addItem={this.addItem}
                />
            </div>
        )
    }
}