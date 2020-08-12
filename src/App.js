import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator to be Tested!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Menu />
        </div>
      </header>
    </div>
  );
}

export default App;
