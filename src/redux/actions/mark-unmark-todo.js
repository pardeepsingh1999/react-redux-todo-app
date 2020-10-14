import { MARK_UNMARK_TODO } from './action-types';

export const markUnmarkTodo = todoId => {
    return {
        type: MARK_UNMARK_TODO,
        payload: {
            todoId
        }
    }
}