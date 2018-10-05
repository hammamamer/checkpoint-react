import React, { Component } from 'react';

import './App.css';
import goMyCode from './goMyCode.jpg';

class App extends Component {
  render() {
   return( 
   <div className="App">
    <div>
        <center><img src={goMyCode} alt="logo" className='App-logo' /></center>
    </div>
    <div>
        <p className='paragraphe1'>GoMycode is the Best</p>
        <br/>
        <hr/>
        <br/>
        <p className='paragraphe2'>CodingIsAnAddiction</p>
    </div>
  </div>
);

  }
}

export default App;
