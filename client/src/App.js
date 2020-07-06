import React from 'react';
import routes from './routes'
import './App.css';
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <header>
      <Nav />
      </header>
      
      <div id='logo-box'>
        <img id='logo' src='../glisten-png.png' alt='Glisten Window Cleaning Logo'  />
      </div>
      {routes}
    </div>
  );
}

export default App;
