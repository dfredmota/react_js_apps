import axios from 'axios'

const URL_GET = 'http://localhost:8080/tarefas_rest/todos/'

const URL_POST = 'http://localhost:8080/tarefas_rest/todo'


export const changeDescription = (event) => (
    {
        type: 'DESCRIPTION_CHANGED',
        payload : event.target.value
    }
)

export const search = (description='') => {
    
    return (dispatch, getState) => {
        const description = getState().todo.description
        const request = axios.get(`${URL_GET}?description=${description}`)
              .then(resp => dispatch({type: 'TODO_SEARCHED', payload : resp.data}))
    }    

}


export const add = (description) => {

    return dispatch => {
        axios.post(URL_POST, {description})
        .then(resp => dispatch(clear()))
        .then(resp => dispatch(search()))
    }
}


export const markAsDone = (todo) => {

    return dispatch => {

        axios.put(`${URL_POST}/${todo.id}`, {...todo, done: true})
        .then(resp => dispatch({ type: 'TODO_MARKED_AS_DONE', payload : resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {

    return dispatch => {

        axios.put(`${URL_POST}/${todo.id}`, {...todo, done: false})
        .then(resp => dispatch(search()))
    }
}


export const remove = (todo) => {

    return dispatch => {

        axios.delete(`${URL_POST}/${todo.id}`)
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {

    return [{ type: 'TODO_CLEAR' }, search()]
}