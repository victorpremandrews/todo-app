import React, { Component } from 'react';

import './App.css';
import AddTodo from './container/AddTodo';
import CompletedTodo from './container/CompletedTodo';
import PendingTodo from './container/PendingTodo';


class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <PendingTodo />
        <CompletedTodo />
      </div>
    );
  }
}

export default App;
