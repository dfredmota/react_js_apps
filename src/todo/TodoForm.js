import React from 'react'

import Grid from '../template/Grid'

import IconButton from '../template/IconButton'

export default props => {

    const keyHandler = (e) => {

        if(e.key === 'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        }else if(e.key === 'Escape'){

            props.handleClear();
             
        }
    }

return (

    <div role='form' className='todoForm'>
    
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'
                onKeyUp={keyHandler}
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>
    
        <Grid cols='12 3 2'>
        
            <IconButton style='primary' icon='plus'
            onClick={props.handleAdd} acao='Add' ></IconButton>  
    
            <IconButton style='info' icon='search'
            onClick={props.handleSearch} acao='Buscar' ></IconButton>  
    
            <IconButton style='secondary' icon='close'
            onClick={props.handleClear} acao='Limpar' ></IconButton> 
                
        </Grid>
    
        </div>

    )

}