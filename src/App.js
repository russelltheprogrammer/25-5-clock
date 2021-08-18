import './index.scss';
import React from 'react';
import TwentyFivePlusFiveClock from './TwentyFivePlusFiveClock';

function App() {
  return (
    <div className="App">
      <div>
      <label className="App-header">
        25 + 5 Clock
      </label>
      <TwentyFivePlusFiveClock />
      </div>
      <footer className="footer">
        Coded By <a 
        target="_blank" rel="noreferrer" href="https://github.com/russelltheprogrammer">
        RussellTheProgrammer</a> for FCC curriculum
      </footer>
    </div>
  );
}

export default App;
