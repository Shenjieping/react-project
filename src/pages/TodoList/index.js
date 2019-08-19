import React, {Component} from 'react';
import {Button, Input, List} from 'antd';
import './style.scss';

class TodoLIst extends Component {
    constructor(props) {
        super(props);
        this.action = props.action;
    }
    componentDidMount() {
        this.action.getTodoList();
    }
    render() {
        let {inputValue, list} = this.props.todoData.toJS();
        return (
            <div className='todo-list'>
                <div>
                    <Input
                        value={inputValue}
                        onChange={e => this.changeInput(e)} />
                    <Button
                        type='primary'
                        onClick={_ => this.addItem()}>添加</Button>
                </div>
                <List
                    dataSource={list}
                    bordered
                    renderItem={(item, key) => (
                        <List.Item>
                            {item}
                            <Button
                                className='del-btn'
                                onClick={() => this.delItem(key)}>删除</Button>
                        </List.Item>
                    )}></List>
            </div>
        )
    }
    changeInput(e) {
        this.action.changeInput(e.target.value);
    }
    addItem() {
        let {inputValue} = this.props.todoData.toJS();
        if (!inputValue) {
            alert('请输入内容')
        } else {
            this.action.addItem(inputValue);
        }
    }
    delItem(key) {
        this.action.delItem(key);
    }
}

export default TodoLIst;