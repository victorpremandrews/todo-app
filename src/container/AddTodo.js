import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './../action/index'; 

const AddTodo = ({ dispatch }) => {
    let inpText;
    
    let handleSubmit = e => {
        e.preventDefault();
        if(!this.inpText.value.trim()) return;
        dispatch(addTodo(this.inpText.value));
        this.inpText.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>ADD ITEM</h4>
            <hr />
            <input type="text" name="inpTodo" ref={input => this.inpText = input} />
            &nbsp;
            <button type="submit">Add</button> 
        </form>
    )
};

export default connect()(AddTodo);