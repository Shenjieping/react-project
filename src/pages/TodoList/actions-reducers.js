import * as types from '@/store/action-types';
import {fromJS} from 'immutable';
import IO from '@http';

export const actions = {
    getTodoList() {
        return dispatch => {
            IO.getList()
                .then(res => {
                    let {list} = res.data || {};
                    dispatch({
                        type: types.GET_TODO_LIST,
                        list
                    });
                })
                .catch(err => {
                    console.error(err);
                });
        }
    },
    changeInput(value) {
        return dispatch => {
            dispatch({
                type: types.CHANGE_INPUT,
                value
            });
        };
    },
    addItem(value) {
        return dispatch => {
            dispatch({
                type: types.ADD_ITEM,
                value
            });
        };
    },
    delItem(key) {
        return dispatch => {
            dispatch({
                type: types.DEL_ITEM,
                key
            });
        };
    }
};

const initState = fromJS({
    inputValue: '',
    list: []
});

export const reducers = {
    todoList(state = initState, action) {
        switch (action.type) {
            case types.GET_TODO_LIST:
                return state.set('list', action.list);
            case types.CHANGE_INPUT:
                return state.set('inputValue', action.value);
            case types.ADD_ITEM:
                let addList = state.get('list').toJS();
                addList.push(action.value);
                return state.set('list', fromJS(addList))
                    .set('inputValue', '');
            case types.DEL_ITEM:
                let delList = state.get('list').toJS();
                delList.splice(action.key, 1);
                return state.set('list', fromJS(delList));
            default:
                return state;
        }
    }
}