import request from 'superagent';

const URL = process.env.REACT_APP_API_URL || 'https://nameless-harbor-83220.herokuapp.com';

// const token = localStorage.getItem('TOKEN');

export function signUp(userData) {
    try {
        return request.post(`${URL}/auth/signup`, userData);
    } catch(e) {
        return { error: e.message }
    }
}


export function signIn(userData) {
    try {
        return request.post(`${URL}/auth/signin`, userData);
    } catch(e) {
        return { error: e.message }
    }
}


export function fetchTodos() {
    const token = localStorage.getItem('TOKEN');

    try{
        return request
            .get(`${URL}/api/todos`)
            .set('Authorization', token);
    } catch(e) {
        return { error: e.message }
    }
}


export function fetchTodo(id) {
    const token = localStorage.getItem('token');

    return request.get(`${URL}/api/todos/${id}`)
        .set('Authorization', token);
}


export function deleteTodo(id) {
    const token = localStorage.getItem('token');

    return request.delete(`${URL}/api/todos/${id}`)
        .set('Authorization', token);
}


export function updateTodo(id, updatedTodo) {
    const token = localStorage.getItem('token');
    
    return request.put(`${URL}/api/todos/${id}`, updatedTodo)
        .set('Authorization', token);
}


export function createTodo(todoData) {
    const token = localStorage.getItem('token');

    return request.post(`${URL}/api/todos`, todoData)
        .set('Authorization', token);
}

