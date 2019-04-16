const INITIAL_STATE =  {

    description: 'Ler Livro',
    list: [{
        id: 1,
        description : 'Pagar Fatura do Cartão',
        done: true        
    },
    {
        id: 1,
        description : 'Lavar o Carro',
        done: true

    }, {

        id: 3,
        description: 'Consulta Médica na terça depois do almoço',
        done: false
    }


]
}

export default ( state = INITIAL_STATE , action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED' :
            return { ...state, description : action.payload  }
        default:
            return state
    }
}