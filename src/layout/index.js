import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';

const Layout = (props) => {
    return (
        <div className='layout'>
            <div className='header'>
                <NavLink exact to='/'>首页</NavLink>
                <NavLink to='/list'>列表</NavLink>
                <NavLink to='/todo'>todoList</NavLink>
            </div>
            <div className="container">{props.children}</div>
            <div className="footer">footer</div>
        </div>
    );
}

export default Layout;