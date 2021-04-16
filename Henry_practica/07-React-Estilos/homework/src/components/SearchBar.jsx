import React from 'react';
import sSearch from './SearchBar.module.scss';


export default function SearchBar({onSearch}) {
  // acá va tu código
  return ( 
  <div  className ={sSearch.barraBusqueda}>
    <input type ="text" placeholder ="Ciudades..." />
    <button onClick={() => onSearch("ciudad")}>Buscar</button>
  </div>
  );
}