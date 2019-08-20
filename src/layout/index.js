import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';

class Layout extends Component {
    render() {
        return (
            <div className='layout'>
                <div className='header'>
                    <NavLink exact to='/'>首页</NavLink>
                    <NavLink to='/list'>列表</NavLink>
                    <NavLink to='/todo'>todoList</NavLink>
                </div>
            </div>
        );
    }
};

export default Layout;