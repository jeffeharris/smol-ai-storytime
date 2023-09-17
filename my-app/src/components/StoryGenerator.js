import React, { useState } from 'react';
import Story from './Story';
import UserInputForm from './UserInputForm';

const StoryGenerator = () => {
  const [story, setStory] = useState(null);

  const generateStory = (userInputs) => {
    // This is where the story generation logic would go
    // For simplicity, we'll just join the user inputs into a string
    setStory(Object.values(userInputs).join(' '));
  };

  return (
    <div>
      <UserInputForm onSubmit={generateStory} />
      {story && <Story text={story} />}
    </div>
  );
};

export default StoryGenerator;