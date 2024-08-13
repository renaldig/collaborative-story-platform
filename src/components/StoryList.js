import React from 'react';
import { Stack, Heading } from 'braid-design-system';
import { useStories } from '../context/StoryContext';
import StoryDetails from './StoryDetails';

const StoryList = () => {
  const { stories } = useStories();

  return (
    <Stack space="medium">
      <Heading level="2">All Stories</Heading>
      {stories.map(story => (
        <StoryDetails key={story.id} story={story} />
      ))}
    </Stack>
  );
};

export default StoryList;
