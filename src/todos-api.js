import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://nameless-harbor-83220.herokuapp.com';

export function fetchTodos() {
    try{
        return request.get(`${URL}/todos`);
    } catch(e) {
        return { error: e.message }
    }
}


export function fetchTodo(id) {
    return request.get(`${URL}/todos/${id}`);
}


export function deleteTodo(id) {
    return request.delete(`${URL}/todos/${id}`);
}


export function updateTodo(id, updatedTodo) {
    console.log(id, 'wazzzzzupppppppppp');
    return request.put(`${URL}/todos/${id}`, updatedTodo);
}


export function createTodo(todoData) {
    return request.post(`${URL}/todos`, todoData)
}

