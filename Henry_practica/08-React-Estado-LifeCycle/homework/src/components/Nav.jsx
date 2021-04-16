import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav
      style={{
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "8px",
       backgroundColor: "blue",

      }}>
       { <div style={{ display: "flex", alignItems: "center" }}>
        <img id="logoHenry" src={Logo} alt="Logo" />
        <h1 style={{ margin: 0, fontSize: "24px" }}>Henry - Weather App</h1>
      </div> }
      <SearchBar onSearch={onSearch} />

    </nav>
  );
};

export default Nav;
