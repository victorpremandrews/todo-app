import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from './../action';
import TodoList from '../component/TodoList';
import { getCompletedTodos } from './../selector';

const title = "COMPLETED ITEMS";

const mapStateToProps = (state, props) => ({
    todos: getCompletedTodos(state),
    title: title
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

const CompletedTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default CompletedTodo;