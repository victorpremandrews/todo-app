import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from './../action';
import TodoList from '../component/TodoList';
import { getPendingTodos } from './../selector';

const title = "PENDING ITEMS";

const mapStateToProps = (state, props) => ({
    todos: getPendingTodos(state),
    title: title
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const PendingTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default PendingTodo;