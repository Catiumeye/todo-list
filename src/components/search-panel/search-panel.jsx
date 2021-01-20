import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component {
    render() {
        const { term } = this.props;
        return (
            <input className='input-search'
                   placeholder='Search...'
                   onChange={(e) => term(e.target.value)}
                   />
        )
    }


}