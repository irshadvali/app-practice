/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
const ReviewWindow: React.FC<{ onClose: () => void, buttonPosition: { top: number, left: number } }> = ({ onClose, buttonPosition }) => (
    <div style={{
        position: 'absolute',
        top: buttonPosition.top - 180, // Adjust top position as needed
        left: buttonPosition.left - 150, // Adjust left position as needed
        width: '300px',
        height: '150px',
        border: '1px solid #ccc',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        zIndex: 1000 // Ensure the window is above other elements
    }}>
        <h2>Review Submission</h2>
        <p>Please review your submission before finalizing.</p>
        <button onClick={onClose}>Close</button>
    </div>


);
export default ReviewWindow;