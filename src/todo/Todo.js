import React , { Component } from 'react'
import axios from 'axios';

import PageHeader from '../template/PageHeader'
import TodoForm from '../todo/TodoForm'
import TodoList from '../todo/TodoList'

const URL_GET = 'http://localhost:8080/tarefas_rest/todos/'

const URL_POST = 'http://localhost:8080/tarefas_rest/todo'



export default class Todo extends Component {

   constructor(props){

    super(props)

    this.state = { description : '' , list : []}

    this.handleAdd = this.handleAdd.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.handleRemove = this.handleRemove.bind(this);

    this.refresh()

   }

    handleRemove(todo){
        alert(`${URL_POST}/${todo.id}`)
        axios.delete(`${URL_POST}/${todo.id}`)
            .then(resp => this.refresh())
    }

    handleMarkAsDone(todo){

        axios.put
    }

    refresh(){

        axios.get(URL_GET)
        .then(resp => this.setState({...this.state, description : '',
        list : resp.data}))

    }

   async handleAdd(){

        // let res = await axios.get(URL);
        // console.log(res.data);

        const description = this.state.description
        axios.post(URL_POST,{description})
        .then(resp => this.refresh())
    }
        
    handleChange(e){

        this.setState({...this.state , description : e.target.value})

    }

    render(){
        
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                description={this.state.description}/>
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove} />
            </div>
        )
    }
}