import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoListAR from './actions-reducers';
import TodoList from './index';

const mapStateToProps = (state) => {
    return {
        todoData: state.todoList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        action: bindActionCreators(todoListAR.actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);