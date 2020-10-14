import { DELETE_MARK_TODO } from './action-types';

export const deleteMarkTodos = () => {
    return {
        type: DELETE_MARK_TODO,
        payload: {}
    }
}