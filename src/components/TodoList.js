import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import '../styles/App.css';

import Todo from './Todo';

class TodoList extends Component {
    
    render() {
        
        return ( 
        <>
        <div className="main__note__filter">
            <Button id="allTodoShow" color="primary" className="mr-2"
            // className={`mr-2 ${filterTodo.all ? 'active': ''}`} 
            // onClick={handleShowAllTodo} 
            >All</Button>
            <Button id="activeTodoShow" color="primary" className="mr-2"
            // className={`mr-2 ${filterTodo.active ? 'active': ''}`}  
            // onClick={handleShowActiveTodo} 
            >Active</Button>
            <Button id="completeTodoShow" color="primary" 
            // className={filterTodo.completed ? 'active': ''}
            // onClick={handleShowCompletedTodo} 
            >Completed</Button>
            
            <Button className="float-right" color="danger" 
            // onClick={handleClearTodos}
            >Clear Completed Todos</Button>

        </div>

        <hr />
        
            {
                this.props.todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} />
                })
            }
            
        </>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        todos: state.addTodo.todos
    }
};

// const mapDispatchToProps = dispatch => {
//     return {
//         addTodoDetail: (todoDetail) => dispatch(addTodoDetail(todoDetail))
//     }
// }

export default connect(mapStateToProps, null)(TodoList);
