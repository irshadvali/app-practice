import React, { useState } from "react";
import "./Slide.css"; // Import CSS file for panel styling

const Slide: React.FC = () => {
  // State to control panel visibility
  const [showPanel, setShowPanel] = useState<boolean>(false);

  // Function to toggle panel visibility
  const togglePanel = () => {
    setShowPanel(!showPanel);
  };

  // Function to close panel
  const closePanel = () => {
    setShowPanel(false);
  };

  return (
    <div className="panel-container">
      <button onClick={togglePanel}>Show Panel</button>
      {/* Render the panel conditionally based on state */}
      <div className={`panel ${showPanel ? "active" : ""}`}>
        {/* Cancel icon to close panel */}
        <span className="cancel-icon" onClick={closePanel}>
          &#10006;
        </span>
        {/* Panel content goes here */}
        <h2>Panel Content</h2>
        <p>This is the content of the panel.</p>
      </div>
    </div>
  );
};

export default Slide;
