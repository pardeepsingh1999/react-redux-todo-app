import { 
    ADD_TODO, EDIT_TODO,
    DELETE_TODO, MARK_ALL_TODO,
    MARK_UNMARK_TODO, DELETE_MARK_TODO
} from '../actions';

const initialState = {
    todos: [
        { id: 101,name:'pp',complete:true },
        { id: 1012,name:'sim',complete:true },
    ]
}

export const addTodoReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_TODO: {
            
            state = {
                ...state,
                todos: [...state.todos, action.payload.todoDetail]
            }
            break;
        }
        case EDIT_TODO: {
            const newTodos = [...state.todos];
            const todo = newTodos.find(todo => todo.id === action.payload.todoId)

            todo['name'] = action.payload.editName;

            state = {
                ...state,
                todos: [...newTodos]
            }
            break;
        }
        case DELETE_TODO: {
            const newTodos = [...state.todos];
            const todoIndex = newTodos.findIndex(todo => todo.id === action.payload.todoId);
            newTodos.splice(todoIndex,1);

            state = {
                ...state,
                todos: [...newTodos]
            }
            break;
        }
        case MARK_ALL_TODO: {
            const newTodos = [...state.todos];

            if(action.payload.checked) {
                newTodos.map(todo => todo.complete = true);
            } else {
                newTodos.map(todo => todo.complete = false);
            }

            state = {
                ...state,
                todos: [...newTodos]
            }
            break;
        }
        case MARK_UNMARK_TODO: {
            const newTodos = [...state.todos];
            const todo = newTodos.find(todo => todo.id === action.payload.todoId);
            todo.complete = !todo.complete;

            state = {
                ...state,
                todos: [...newTodos]
            }
            break;
        }
        case DELETE_MARK_TODO: {
            const newTodos = state.todos.filter(todo => !todo.complete)

            state = {
                ...state,
                todos: [...newTodos]
            }
            break;
        }
        default: {
            console.log('error: action type not match in addTodoReducer')
        }
    }

    return state;
}