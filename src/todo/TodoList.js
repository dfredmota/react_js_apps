import React from 'react'

import IconButton from '../template/IconButton'

export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo =>(

            <tr key={todo.id}>

                <td>{todo.description}</td>
                <td>
                    
                <IconButton style='danger' acao='Deletar'
                    onClick={() => props.handleRemove(todo)}/>
                 
                <IconButton style='warning' acao='Feita'
                onClick={() => props.handleMarkAsDone(todo)}></IconButton>

                <IconButton style='warning' acao='Pendente'
                onClick={() => props.handleMarkAsPending(todo)}></IconButton>
                </td>

            </tr>

        ))
    }

    return (

        <table className='table'>
        
            <thead>

            <tr>

                <th> Descrição</th>
                <th> Ações </th>

            </tr>

            </thead>

            <tbody>

                {renderRows()}

            </tbody>

        </table>

    )

    }