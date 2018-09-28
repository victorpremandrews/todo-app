import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoEdit from './TodoEdit';

export default class Todo extends Component {
    static propTypes = {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        toggleTodo: PropTypes.func.isRequired
    }

    state = {
        editMode: false
    };

    handleSave(id, text) {
        this.setState({editMode: false});
        this.props.editTodo(id, text);
    }

    handleDelete(id) {
        this.setState({editMode: false});
        this.props.deleteTodo(id);
    }

    render() {
        let { todo, toggleTodo, deleteTodo } = this.props; 
        let element;

        if(this.state.editMode) {
            element = 
                <TodoEdit 
                    todo={todo}
                    onSave={(text) => this.handleSave(todo.id, text)}
                    onDelete={() => this.handleDelete(todo.id)}
                />
        } else {
            element = <div>
                <input 
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)} />
                <label style={{
                    textDecoration: todo.completed ? 'line-through' : 'none'
                }}>{todo.text}</label>
                <button onClick={() => this.setState({editMode: true})}>Edit</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>;
        }

        return (
            <li>
                {element}
            </li>
        );
    }
}
