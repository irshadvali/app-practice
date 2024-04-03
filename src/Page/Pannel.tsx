import React from "react";

interface PanelProps {
  togglePanel: () => void;
  closePanel: () => void;
  showPanel: boolean;
}

const Pannel: React.FC<PanelProps> = ({ togglePanel, closePanel, showPanel }) => {
  console.log(togglePanel, closePanel, showPanel);
  return (
    <div className="panel-container">
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

export default Pannel;
