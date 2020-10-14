import { DELETE_TODO } from './action-types';

export const deleteTodoById = todoId => {
    return {
        type: DELETE_TODO,
        payload: {
            todoId
        }
    }
}