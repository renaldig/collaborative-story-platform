import React from 'react';
import { useStories } from '../context/StoryContext';
import { Button, Inline } from 'braid-design-system';

const StoryVotes = ({ storyId }) => {
  const { voteContribution } = useStories();

  return (
    <Inline space="small">
      <Button onClick={() => voteContribution(storyId, 1)}>Upvote</Button>
      <Button onClick={() => voteContribution(storyId, -1)} tone="critical">Downvote</Button>
    </Inline>
  );
};

export default StoryVotes;
