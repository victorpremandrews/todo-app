import { 
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    EDIT_TODO,
    CLEAR_COMPLETED
} from './../constants/actions';

export default function todos(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1,
                    text: action.text,
                    completed: false,
                }
            ];

        case TOGGLE_TODO:
            return state.map(todo => 
                (action.id === todo.id) 
                    ? Object.assign({}, todo, {completed: !todo.completed})
                    : todo
            );

        case EDIT_TODO:
            return state.map(todo => 
                (todo.id === action.id) 
                    ? {...todo, text: action.text}
                    : todo
            );
        
        case DELETE_TODO:
            return state.filter(todo => action.id !== todo.id);

        
        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed !== true);

        default:
            return state;
    }
}; 