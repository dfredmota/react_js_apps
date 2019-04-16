import axios from 'axios'

const URL_GET = 'http://localhost:8080/tarefas_rest/todos/'


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