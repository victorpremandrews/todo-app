import { 
    ADD_TODO, 
    EDIT_TODO,
    DELETE_TODO,
    TOGGLE_TODO,
    CLEAR_COMPLETED 
} from './../constants/actions';

export const addTodo = text => ({type: ADD_TODO, text});
export const toggleTodo = id => ({type: TOGGLE_TODO, id});
export const deleteTodo = id => ({type: DELETE_TODO, id});
export const editTodo = (id, text) => ({type: EDIT_TODO, id, text});
export const clearSelected = () => ({type: CLEAR_COMPLETED});