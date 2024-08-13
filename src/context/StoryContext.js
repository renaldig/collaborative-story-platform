import React, { createContext, useContext } from 'react';
import useStoryManager from '../hooks/useStoryManager';

const StoryContext = createContext();

export const useStories = () => useContext(StoryContext);

export const StoryProvider = ({ children }) => {
  const storyManager = useStoryManager();

  return (
    <StoryContext.Provider value={storyManager}>
      {children}
    </StoryContext.Provider>
  );
};
