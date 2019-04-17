import axios from 'axios'

const URL_GET = 'http://localhost:8080/tarefas_rest/todos/'

const URL_POST = 'http://localhost:8080/tarefas_rest/todo'


export const changeDescription = (event) => (
    {
        type: 'DESCRIPTION_CHANGED',
        payload : event.target.value
    }
)

export const search = () => {
    
    const request = axios.get(URL_GET)
    return {
        type: 'TODO_SEARCHED',
        payload : request
    }
}


export const add = (description) => {

    return dispatch => {
        axios.post(URL_POST, {description})
        .then(resp => dispatch({type: 'TODO_ADDED', payload : resp.data}))
        .then(resp => dispatch(search()))
    }
}