import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({todos, actions, title}) => {
    let count = todos.length;
    let elm;

    if(count > 0) {
        elm = <ul>
            {todos.map(todo => <Todo key={todo.id} todo={todo} {...actions} />)}
        </ul>;
    } else {
        elm = <p>No Items to Show</p>
    }
    
    return (
        <div>
            <h4>{title}</h4>
            <hr />
            {elm}
        </div>
    )
};

TodoList.protoTypes = {
    todo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired       
        })
    ),
    actions: PropTypes.object.isRequired
};

export default TodoList;

