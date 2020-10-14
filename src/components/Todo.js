import React, { Component } from 'react';
import '../styles/Todo.css';
import { connect } from 'react-redux';
import { editTodo } from '../redux/actions/edit-todo';
import { deleteTodoById } from '../redux/actions/delete-todo';
import { markUnmarkTodo } from '../redux/actions/mark-unmark-todo';

class Todo extends Component {

    state = {
        isEdit: false,
        editName: ''
    }

    constructor() {
        super();
    
        this.handleDoubleClickEditTodo = this.handleDoubleClickEditTodo.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

        this.editTodoData = React.createRef();
    }

    componentDidMount() {
        console.log(this.props)
    }

    shouldComponentUpdate() {return true;}

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
    }

    handleTodoClick = () => {
        this.props.markUnmarkTodo(this.props.todo.id)
    }

    handleDeleteTodo = () => {
        this.props.deleteTodoById(this.props.todo.id)
    }

    handleOutsideClick(e) {
        this.handleDoubleClickEditTodo()
    }

    handleDoubleClickEditTodo = (e) => {
        console.log(this.state.isEdit)
        if (!this.state.isEdit) {
            this.setState({editName:this.props.todo.name})

            this.setState({                
                isEdit: !this.state.isEdit
            },()=>{
                this.editTodoData.current.focus()
            })

        } else {
            let editName = this.state.editName.trim()

            if(editName.length > 0 ) {
                this.props.editTodo({todoId:this.props.todo.id, editName})
            } else {
                alert('Empty list not acceptable')
                console.log(this.props.todo.name)
            }
            this.setState({isEdit: !this.state.isEdit})
        }
    }

    handleEditOnChange = (e) => {
        this.setState({editName:e.target.value})
    }

    handleEditKeyDown = (e) => {
    
        const name = this.props.todo.name.trim();

        if(e.keyCode === 13 && name.length !== 0) {
            this.handleOutsideClick()
        }
    };

    render() {

        return (
            
            <div className="m-4 main__child__box">
            <p>{this.props.todo['complete']}</p>

                <div id={ this.props.todo.id } className="d-flex mb-3 child__note">
                        <div className="p-2">
                            <input 
                                className="child__note__checkbox mt-1"
                                type="checkbox" 
                                checked={this.props.todo.complete}
                                onChange={ this.handleTodoClick } 
                            />
                        </div>
                        <div className="p-2 todo__data__block">
                            <p onDoubleClick={this.handleDoubleClickEditTodo} 
                            className={`${this.state.isEdit ? 'hide' : 'show'} 
                            ${this.props.todo.complete ? 'completed' : ''}`}> 
                                {this.props.todo.name} 
                            </p>
                            <input className={this.state.isEdit ? 'show' : 'hide'} 
                            ref={this.editTodoData}
                            type="text" 
                            value={this.state.editName} 
                            onBlur={this.handleOutsideClick}
                            onKeyDown={this.handleEditKeyDown}
                            onChange={this.handleEditOnChange} />                            
                        </div>
                        <div className="ml-auto p-2">
                            <button data-toggle="tooltip" title="Delete!" 
                            onClick={this.handleDeleteTodo}
                            className="btn btn-danger child__delete__note">
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>

            </div>

            
        )
    }
}
 
const mapDispatchToProps = dispatch => {
    return {
        editTodo: (todoDetail) => dispatch(editTodo(todoDetail)),
        deleteTodoById: (todoId) => dispatch(deleteTodoById(todoId)),
        markUnmarkTodo: (updateTodo) => dispatch(markUnmarkTodo(updateTodo))
    }
}

export default connect(null, mapDispatchToProps)(Todo);
