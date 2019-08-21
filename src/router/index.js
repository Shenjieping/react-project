import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '@/pages/Home';
import List from '@/pages/List';
import TodoList from '@/pages/TodoList/container';
import './style.scss';
import Layout from '@/layout';

export default () => {
    return (
        <div className="router-container">
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/list' component={List} />
                        <Route path='/todo' component={TodoList} />
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}
