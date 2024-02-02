import * as types from '../types'
const initialState = {
    botaoClicado: false,
}


export default function (state=initialState , action){
    switch(action.type){
        case types.BOTAO_CLICADO_SUCCESS:{
        const newState ={...state};
        newState.botaoClicado = !newState.botaoClicado
        console.log('sucesso na requisição')
        return newState;
        }
        case types.BOTAO_CLICADO_REQUEST:{
        
        console.log('estou fazendo a requisição')
        return state;
        }
        case types.BOTAO_CLICADO_FAIL:{
        
        console.log('erro na requisição')
        return state;
        }
        default: return state;
    }
}