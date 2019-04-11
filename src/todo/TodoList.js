import React from 'react'

import IconButton from '../template/IconButton'

export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo =>(

            <tr key={todo.id}>

                <td className={todo.done ? 'markedAsDone' : '' }>{todo.description}</td>
                <td>
                    
                <IconButton style='danger' acao='Deletar' hide={!todo.done}
                    onClick={() => props.handleRemove(todo)}/>
                 
                <IconButton style='success' acao='Feita' hide={todo.done}
                onClick={() => props.handleMarkAsDone(todo)}></IconButton>

                <IconButton style='warning' acao='Pendente' hide={!todo.done}
                onClick={() => props.handleMarkAsPending(todo)}></IconButton>
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