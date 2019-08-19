import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import Home from '@/pages/Home';
import List from '@/pages/List';
import TodoList from '@/pages/TodoList/container';
import './style.scss';

export default () => {
    return (
        <div className="router-container">
            <Router>
                <div className='link-url'>
                    <Link to='/'>首页</Link>
                    <Link to='/list'>列表</Link>
                    <Link to='/todo'>todoList</Link>
                </div>
                <div className='container'>
                    <Route exact path='/' component={Home} />
                    <Route path='/list' component={List} />
                    <Route path='/todo' component={TodoList} />
                </div>
            </Router>
        </div>
    );
}