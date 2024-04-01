import React, { useState } from "react";
import "./Popup.css";

const Popup: React.FC = () => {
  // State to control popup visibility
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Function to toggle popup visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="popup-container">
      <div className="reports-wrap">
        <div className="wrap-left">
          <button onClick={togglePopup} className="button-icon">
            <img src="icon.png" alt="Icon" />
          </button>
          <div className="heading-wrap">
            <div className="text-heading">Reports Summary</div>
            <span>Analysis Complete</span>
            <p>Target List Name</p>
          </div>
        </div>
        <div className="wrap-right">
          <button>
            <img src="icon.png" alt="Icon" />
          </button>
          <button>
            <img src="icon.png" alt="Icon" />
          </button>
          <button>
            <img src="icon.png" alt="Icon" />
          </button>
        </div>
      </div>

      {/* Render the popup conditionally based on state */}
      {showPopup && (
        <div className="popup">
          {/* Popup content goes here */}
          <h2>Popup Content</h2>
          <p>This is the content of the popup.</p>
        </div>
      )}
    </div>
  );
};

export default Popup;
