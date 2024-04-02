import React, { useState } from "react";
import "./Slide.css"; // Import CSS file for panel styling

const Slide: React.FC = () => {
  // State to control panel visibility
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  // Function to toggle panel visibility
  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  // Function to close panel
  const closePanel = () => {
    //setIsFullScreen(false)
    setShowPanel(false);
   
  };
  const handleFullScreen = () => {
    // setIsFullScreen(!isFullScreen);
    const element = document.getElementById("pan")
    const isNotFullScreen= document.fullscreenElement;
    if(isNotFullScreen){
        document.exitFullscreen()
        setIsFullScreen(false)
    }else {
        element?.requestFullscreen()
        setIsFullScreen(true)
    }
  };
  return (
    <div className="panel-container">
      <button onClick={togglePanel}>Show Panel</button>
      {/* Render the panel conditionally based on state */}
      <div id ="pan" className={`panel ${showPanel ? "active" : ""}`}>
        {/* Cancel icon to close panel */}
        <span className="cancel-icon" onClick={closePanel}>
          &#10006;
        </span>
        {/* Panel content goes here */}
        <h2>Panel Content</h2>
       
        <div className="test">
        <p>This is the content of the panel.</p>
        </div>
        <button onClick={handleFullScreen}>
        {isFullScreen ? "Exit Full Screen" : "Go Full Screen"}
      </button>
      </div>
    </div>
  );
};

export default Slide;
