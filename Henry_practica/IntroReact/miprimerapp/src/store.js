import { createStore } from 'redux'


const inictialState = {
    jugadores: [],
    titulares: [],
    suplentes: [],

}



const reducerEntrenador = (state = inictialState, action) => {
    
    return state
}


export default createStore(reducerEntrenador)