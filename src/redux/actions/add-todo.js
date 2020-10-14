import { ADD_TODO } from './action-types';

export const addTodoDetail = todoDetail => {
    return {
        type: ADD_TODO,
        payload: {
            todoDetail
        }
    }
}