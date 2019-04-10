import React from 'react'



export default props => {

    const renderRows = () => {

        const list = props.list || []

        return list.map(todo =>(

            <tr>

                <td>{todo.description}</td>
            </tr>

        ))
    }

    return (

        <table className='table'>
        
            <thead>

            <tr>

                <th> Descrição</th>

            </tr>

            </thead>

            <tbody>

                {renderRows()}

            </tbody>

        </table>

    )

    }