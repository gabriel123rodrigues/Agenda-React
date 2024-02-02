import { call,put,all,takeLatest } from 'redux-saga/effects';
import * as actions from './action';
import * as types from '../types'; 
import {toast} from 'react-toastify'

const requisicao =()=>
 new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve();
    }, 2000);
});

function* exampleRequest(){
    try{
        yield call(requisicao);
        yield put(actions.clicaBotaoSuccess())
    }catch{
        toast.error("deu erro")
        yield put(actions.clicaBotaoFail())
    }
}

export default all([

    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
])

