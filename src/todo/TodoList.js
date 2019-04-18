import React from 'react'

import IconButton from '../template/IconButton'

import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'

import { markAsDone, markAsPending , remove } from './TodoActions'

const TodoList = props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo =>(

            <tr key={todo.id}>

                <td className={todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
                <td>
                    
                <IconButton style='danger' acao='Deletar' hide={!todo.done}
                    onClick={() => props.remove(todo)}/>
                 
                <IconButton style='success' acao='Feita' hide={todo.done}
                onClick={() => props.markAsDone(todo)}></IconButton>

                <IconButton style='warning' acao='Pendente' hide={!todo.done}
                onClick={() => props.markAsPending(todo)}></IconButton>
                </td>

            </tr>

        ))
    }

    return (

        <table className='table'>
        
            <thead>

            <tr>

                <th className='tableActions'> Descrição</th>
                <th> Ações </th>

            </tr>

            </thead>

            <tbody>

                {renderRows()}

            </tbody>

        </table>

    )

    }


    const mapStateToProps = state  => ({list: state.todo.list})
    const mapDispatchToProps = (dispatch) => bindActionCreators({ markAsDone
    , markAsPending, remove}, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(TodoList)