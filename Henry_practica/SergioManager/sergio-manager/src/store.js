import React from 'react';
import { createStore } from 'redux';


const initialState = {
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



function reducerEntrenador(state = initialState, action) {
    
    return state
}



export default createStore(reducerEntrenador)