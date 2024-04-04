import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slide from './Page/Slide';
import Popup from './Page/Popup';
import FullScreen from './Page/FullScreen';
import NewApp from './Page/NewApp';
import TargetingPage from './Page/TargetingPage';
function App() {
  return (
    <div className="App">
      {/* <Slide></Slide> */}
      {/* <Popup></Popup>*/}
      <TargetingPage></TargetingPage> 
    </div>
  );
}

export default App;
