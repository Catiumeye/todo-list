import React from "react";
import './app-header.css';

const AppHeader = ({todo = 3, done = 1}) => {
    return (
        <div className='app-header'>
            <h1 className='app-header__h1'>Todo list</h1>
            <h2 className='app-header__h2'>{todo} more to do, {done} done</h2>
        </div>
    )
}

export default AppHeader;