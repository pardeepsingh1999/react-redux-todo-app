import { MARK_ALL_TODO } from './action-types';

export const markAllTodos = (checked) => {
    return {
        type: MARK_ALL_TODO,
        payload: {
            checked
        }
    }
}