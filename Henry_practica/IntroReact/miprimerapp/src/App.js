import React from 'react'
import {Provider} from 'react-redux'
import store from './store'
import Jugadores from './Components/Jugadores'



function App() {
  return (
<Provider store = {store}>
  <main>
    <h1>Ed Manger</h1>
  
   
    
 </main>
  
</Provider>
  )
}



export default App;
