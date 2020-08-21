import React from 'react';
import { 
    fetchTodos,
    createTodo, 
    // updateTodo, 
    // deleteTodo
} from './todos-api.js';
import { Link } from 'react-router-dom';


class ListPage extends React.Component {
    state = {
        todos: [],
        completed: '',
    }

    componentDidMount = async () => {
        if (!this.props.token){
            this.props.history.push('/login');
        } else {
            const data = await fetchTodos(this.props.token)

            this.setState({
                todos: data.body
            })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createTodo({
                task: this.state.task,
                completed: this.state.completed
            });

// const todos = await fetched Todos

            this.setState({
                task: '',
                completed: false,
            });

        } catch(e) {
            console.log(e.message)
        }
        this.props.history.push('/');
        // ^check on place for redirection
    }


    
    // this adds a todo to the users list
    handleTodoChange = e => {
        this.setState({ task: e.target.value });
    }
    // does ^ this ADD or CHANGE the item? 

    // this handles whether the task has been done or not
    // need to design a style change to indicate that task is complete somehow
    handleCompletedChange = e => {
        this.setState({ completed: e.target.value });
    }


    // this handles deleting the task from the list
    // handleDeletedChange = e => {
    //     this.setState({ deleteTodo: e.target.value });
    // }


    render() {
        return (
            // * ------- Welcome / List Section ------- * //
                <>
                <div className="todos">
                    <header className="List-header">
                        <h2>Want to begin your list?</h2>
                    </header>
                </div>

                {/*------- Create Todo Section || add todo ------- */}
                <div className="listPage-content">
                    <h3> Start here! </h3>
                <form className="listPage-form" onSubmit={this.handleSubmit}>
                    <label>
                        Task
                        <input onChange={this.handleTodoChange} value={this.state.task} />
                    </label>
                    <label>
                        You done, yetti?
                        <input onChange={this.handleCompletedChange} value={this.state.completed} />
                        {
                            this.state.todos.map((todo) => {
                                return <Link className="todo" to={`/detail/${todo.id}`} key={`${todo.id}-${todo.task}-${todo.completed}`}>
                                    <p>Current to do: {todo.task}</p>
                                    <p>Completed: {todo.completed}</p>
                                </Link>
                        })
                    }
                    </label>
                    
                {/*------- 1.) Make sure changes are async 'd upon click ie. render todo's visible to the page ------- */} 

                {/*------- 2.) Create Delete Button & Link above ------- */}

                {/*------- 3.) Create Delete Button Section ------- */}

                    <button>Submit</button>
                    <button>Delete</button>
                    {/* need to make the delete function active*/}
                </form>
            </div>
        </>
        )
    }
}


export default ListPage;

