import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usuarioReducer, { leerUsuarioAccion } from './Login/usuarioDucks'
import multimediaReducer from './Multimedia/multimediaDucks'
import myListReducer from './MyList/myListDucks'

const rootReducer = combineReducers({
    usuario: usuarioReducer,
    multimedia: multimediaReducer,
    myList: myListReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    leerUsuarioAccion()(store.dispatch)
    return store;
}
