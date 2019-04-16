import React, { Component } from 'react'

import Grid from '../template/Grid'

import IconButton from '../template/IconButton'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { changeDescription , search} from './TodoActions'

class TodoForm extends Component{

    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount(){
        alert(1)
        this.props.search();
    }

    keyHandler(e){

        if(e.key === 'Enter'){
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
        }else if(e.key === 'Escape'){

            this.props.handleClear();
             
        }
    }

    render(){

        return (

            <div role='form' className='todoForm'>
    
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'
                onKeyUp={this.keyHandler}
                onChange={this.props.changeDescription}
                value={this.props.description}></input>
        </Grid>
    
        <Grid cols='12 3 2'>
        
            <IconButton style='primary' icon='plus'
            onClick={this.props.handleAdd} acao='Add' ></IconButton>  
    
            <IconButton style='info' icon='search'
            onClick={this.props.handleSearch} acao='Buscar' ></IconButton>  
    
            <IconButton style='secondary' icon='close'
            onClick={this.props.handleClear} acao='Limpar' ></IconButton> 
                
        </Grid>
    
        </div>

        )
    }
}



const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        changeDescription, search
    },  dispatch
)

export default connect(mapStateToProps , mapDispatchToProps)(TodoForm)