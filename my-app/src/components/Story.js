import React from 'react';
import '../styles/Story.css';

const Story = ({ story }) => {
    return (
        <div className="story-container">
            <h2>Your Story:</h2>
            <p>{story}</p>
        </div>
    );
};

export default Story;