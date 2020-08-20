import React from 'react';
import { fetchTodos } from './todos-api.js';
import { Link } from 'react-router-dom';


class ListPage extends React.Component {
    state = {
        todos: []
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

    render() {
        return (
            <div className="todos">
                <header className="List-header">
                    <h2>What's left on your list?</h2>
                </header>
                {
                    this.state.todos.map((todo) => {
                        return <Link className="todo" to={`/detail/${todo.id}`} key={`${todo.id}-${todo.task}-${todo.completed}`}>
                            <p>Current to do: {todo.task}</p>
                            <p>Completed: {todo.completed}</p>
                        </Link>
                    })
                }
               
            </div>
        )
    }
}


export default ListPage;

