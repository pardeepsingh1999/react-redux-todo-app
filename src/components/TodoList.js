import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import '../styles/App.css';
import { deleteMarkTodos } from '../redux/actions/delete-mark-todo';

import Todo from './Todo';

class TodoList extends Component {

    state = {
        filter: 'all'
    }

    _handleTodoFilter = (type) => {
        this.setState({filter:type})
    }
    
    render() {
        
        const { filter } = this.state;
        const { todos } = this.props;

        let todoAllList;
        
        if(filter==='all') {
            todoAllList = todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} />
            });
        } else if (filter==='active') {
            const filterTodoLists = todos.filter(e => !e.complete);
            todoAllList = filterTodoLists.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            });
        } else if (filter==='completed') {
            const filterTodoLists = todos.filter(e => e.complete);
            todoAllList = filterTodoLists.map(todo => {
                return <Todo key={todo.id} todo={todo} />
            });
        } else {
            todoAllList = null
        }

        return ( 
        <>
        <div className="main__note__filter">
            <Button id="allTodoShow" color="primary"
            className={['mr-2',filter==='all' ? 'active': ''].join(' ')}
            onClick={() => this._handleTodoFilter('all')} 
            >All</Button>
            <Button id="activeTodoShow" color="primary"
            className={['mr-2',filter==='active' ? 'active': ''].join(' ')}
            onClick={() => this._handleTodoFilter('active')} 
            >Active</Button>
            <Button id="completeTodoShow" color="primary" 
            className={filter==='completed' ? 'active': ''}
            onClick={() => this._handleTodoFilter('completed')} 
            >Completed</Button>
            
            <Button className="float-right" color="danger" 
            onClick={this.props.deleteMarkTodos}
            >Clear Completed Todos</Button>

        </div>

        <hr />
        
            {
                todoAllList
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

const mapDispatchToProps = dispatch => {
    return {
        deleteMarkTodos: () => dispatch(deleteMarkTodos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
