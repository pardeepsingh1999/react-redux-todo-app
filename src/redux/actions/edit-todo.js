import { EDIT_TODO } from './action-types';

export const editTodo = (updateTodo) => {
    return {
        type: EDIT_TODO,
        payload: {
            todoId: updateTodo.todoId,
            editName: updateTodo.editName
        }
    }
}

