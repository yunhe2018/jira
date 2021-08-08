import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log(123)
  
  const a = 6

  const  aaa = (params:number) => {
    console.log(123)
  }
  return (
    <div className="App">


      <header className="App-header"
    
  
      >13345

      123

        <img src={logo}
         className="App-logo"
         alt="logo" />
        <p> Edit <code>src/App.tsx </code> 
          and save to reload.
        </p>

        <a 
        className="App-link" href="https://reactjs.org" target="_blank"
          rel="noopener noreferrer"
          >
          Learn React

        </a>
      </header>
    </div>
  );
}

export default App;
