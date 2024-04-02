import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slide from './Page/Slide';
import Popup from './Page/Popup';
import FullScreen from './Page/FullScreen';
function App() {
  return (
    <div className="App">
      {/* <Slide></Slide> */}
      {/* <Popup></Popup> */}
      <FullScreen></FullScreen>
    </div>
  );
}

export default App;
