import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoEdit extends Component {

    state = {
        text: this.props.todo.text || ''
    }

    static propTypes = {
        todo: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    handleSave = () => {
        if(!this.inpText.value.trim()) return;
        this.props.onSave(this.inpText.value.trim());
    }
    
    render() {
        let { onDelete } = this.props;

        return(
            <div>
                <input
                    ref={inp => this.inpText = inp} 
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.text}
                />
                <button onClick={this.handleSave}>Save</button>
                <button onClick={onDelete}>Delete</button>
            </div>
        );
    }

}