import React, { Component } from 'react'
import { connect } from 'react-redux';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { addTodoDetail } from '../redux/actions/add-todo';
import { markAllTodos } from '../redux/actions/mark-all-todo';
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends Component {

    state = {
        todoNote: ''
    }

    handleAddTodo = (e) => {
        const {todoNote} = this.state;
        if(e.keyCode === 13 && todoNote && todoNote.trim().length) {
            this.props.addTodoDetail({name:todoNote,id:uuidv4(),complete:false})
            this.setState({todoNote:''})
        } 
    }

    handleOnChangeTodo = (e) => {
        this.setState({todoNote:e.target.value})
    }

    handleAllCompleteTodos = (e) => {
        this.props.markAllTodos(e.target.checked)
    }

    render() {

        const isAllTodoMark = this.props.todos.length ?
                              this.props.todos.every(e => e.complete) 
                              : false;

        return (
            <>
            <InputGroup>
            <InputGroupAddon addonType="prepend">
              <InputGroupText className="mark__all__button">
                <Input id="allCheckedInput" data-toggle="tooltip" 
                       title="Mark All Todo!" addon type="checkbox" 
                       checked={isAllTodoMark}
                       onChange={this.handleAllCompleteTodos}/>
              </InputGroupText>
            </InputGroupAddon>

            <Input type="text" value={this.state.todoNote} placeholder="Take a note..."
                  onChange={this.handleOnChangeTodo} onKeyDown={this.handleAddTodo} />

          </InputGroup>

            <div className="pt-4">
              <p>{this.props.todos.filter(todo => !todo.complete).length} task left...</p>
            </div>
        </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.addTodo.todos
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodoDetail: (todoDetail) => dispatch(addTodoDetail(todoDetail)),
        markAllTodos: (checked) => dispatch(markAllTodos(checked))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
