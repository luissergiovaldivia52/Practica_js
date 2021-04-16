import React from 'react';
import { Provider } from 'react-redux'
import Jugadores from './components/Jugadores';
import store from './store'


  function App() {
  
    return (
      <Provider store={store}>
      <main>
      <h1>Sergio Manger</h1>
        <Jugadores/>
          
               </main>
      </Provider>
    )
}


export default App;
