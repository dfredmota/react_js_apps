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

    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);

    this.handleMarkAsPending = this.handleMarkAsPending.bind(this)

    this.handleClear = this.handleClear.bind(this)

    this.handleSearch = this.handleSearch.bind(this)

    this.refresh()

   }
   

    handleRemove(todo){
        axios.delete(`${URL_POST}/${todo.id}`)
            .then(resp => this.refresh())
    }

    handleMarkAsDone(todo){

        axios.put(`${URL_POST}/${todo.id}`, {...todo, done: true})
        .then(resp => this.refresh())
    }

    handleMarkAsPending(todo){

        axios.put(`${URL_POST}/${todo.id}`, {...todo, done: false})
        .then(resp => this.refresh())

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
       
        .then(resp => this.refresh())
    }

    handleSearch(){

        // adicionar a description como filtro ver cap 68
        this.refresh();
    }
        
    handleChange(e){

        this.setState({...this.state , description : e.target.value})

    }

    handleClear(){

        this.refresh();
    }

    render(){
        
        return(
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoForm handleAdd={this.handleAdd}
                handleChange={this.handleChange}
                handleSearch = {this.handleSearch}
                handleClear  = {this.handleClear}
                description={this.state.description}/>
                <TodoList 
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleMarkAsPending = {this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                     />
            </div>
        )
    }
}