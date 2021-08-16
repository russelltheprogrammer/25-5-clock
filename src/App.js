import './index.css';
import React from 'react';
import TwentyFivePlusFiveClock from './TwentyFivePlusFiveClock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>25 + 5 Clock</h1>
      </header>
      <TwentyFivePlusFiveClock />
      <footer className="footer">
        Coded By <a 
        target="_blank" rel="noreferrer" href="https://github.com/russelltheprogrammer">
        RussellTheProgrammer</a> for FCC curriculum
      </footer>
    </div>
  );
}

export default App;
