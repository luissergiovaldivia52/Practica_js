import { createStore } from 'redux'


const inictialState = {
    jugadores: [{
        id: 1,
        nombre: "Leonel Messi",
        fotos:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Messi_vs_Nigeria_2018.jpg/245px-Messi_vs_Nigeria_2018.jpg",
    },
    {
        id: 2,
        nombre: "Kylian Mpape",
        fotos:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank–129_%28cropped%29.jpg/220px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank–129_%28cropped%29.jpg",
        },
    {
        id: 3,
        nombre: "Cristiano Ronaldo",
        fotos:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/245px-Cristiano_Ronaldo_2018.jpg",
    },
    
    ],
    titulares: [],
    suplentes: [],

}



const reducerEntrenador = (state = inictialState, action) => {

    if (action.type === "AGREGAR_TITULAR") {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugadores),
            jugadores: state.jugadores.filter(j => j.id !== action.jugadores.id)
            
        }
    }
        if (action.type === "AGREGAR_SUPLENTE") {
            return {
                ...state,
                suplentes: state.suplentes.concat(action.jugadores),
                jugadores: state.jugadores.filter(j => j.id !== action.jugadores.id)
            
            }
    }
    if (action.type === "QUITAR_TITULAR") {
        return {
            ...state,
            titular: state.titular.filter(j => j.id !== action.jugadores.id),
            jugadores: state.jugadores.concat(action.jugadores)
        }
    }

     if (action.type === "QUITAR_SUPLENTE") {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugadores.id),
            jugadores: state.jugadores.concat(action.jugadores)
        }
    }
    return state
    }


export default createStore(reducerEntrenador,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)