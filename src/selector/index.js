import { createSelector } from 'reselect';

const getTodos = state => state.todos;

export const getPendingTodos = createSelector(
    [getTodos],
    todos => todos.filter(todo => !todo.completed)
)

export const getCompletedTodos = createSelector(
    [getTodos],
    todos => todos.filter(todo => todo.completed)
)