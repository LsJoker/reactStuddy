import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Day1 from './components/Day1'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>父组件</h1>
      <Day1 />
    </div>
  );
}

export default App;
