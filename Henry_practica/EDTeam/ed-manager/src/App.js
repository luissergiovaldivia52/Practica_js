import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Jugadores from './Components/Jugadores';
import EquipoSelesccionado from './Components/EquipoSeleccionado';
import './Styles/Styles.modules.scss'



function App() {
  return (
<Provider store = {store}> 
  <main>
        <h1>Sergio Manger</h1>
        <Jugadores />
        <EquipoSelesccionado/>
    </main>
  
</Provider>
  )
}



export default App;
