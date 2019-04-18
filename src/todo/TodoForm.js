import React, { Component } from 'react'

import Grid from '../template/Grid'

import IconButton from '../template/IconButton'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { changeDescription , search , add , clear } from './TodoActions'

class TodoForm extends Component{

    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount(){
        this.props.search();
    }

    keyHandler(e){

        const { add , search , description } = this.props
        if(e.key === 'Enter'){
            e.shiftKey ? search() : add(description);
        }else if(e.key === 'Escape'){

            this.props.handleClear();
             
        }
    }

    render(){

        const { add , search , description } = this.props

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
            onClick={() => add(description)} acao='Add' ></IconButton>  
    
            <IconButton style='info' icon='search'
            onClick={search} acao='Buscar' ></IconButton>  
    
            <IconButton style='secondary' icon='close'
            onClick={this.props.clear} acao='Limpar' ></IconButton> 
                
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
        changeDescription, search , add , clear
    },  dispatch
)

export default connect(mapStateToProps , mapDispatchToProps)(TodoForm)