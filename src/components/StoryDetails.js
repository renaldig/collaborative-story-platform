import React, { useState } from 'react';
import { useStories } from '../context/StoryContext';
import { Card, Button, Stack, Text } from 'braid-design-system';
import AddContribution from './AddContribution';
import StoryVotes from './StoryVotes';
import useGenerateContribution from '../hooks/useGenerateContribution';

const StoryDetails = ({ story }) => {
  const { getStoryContributions } = useStories();
  const [showContributions, setShowContributions] = useState(false);
  const contributions = getStoryContributions(story.id);
  const { generateContribution, loading, error } = useGenerateContribution();

  const handleGenerateContribution = () => {
    const author = 'GPT-4';
    generateContribution(story.id, author);
  };

  return (
    <Card>
      <Stack space="small">
        <Text>{story.title} by {story.author}</Text>
        <StoryVotes storyId={story.id} />
        <Button onClick={() => setShowContributions(!showContributions)}>
          {showContributions ? 'Hide Contributions' : 'Show Contributions'}
        </Button>
        {showContributions && (
          <Stack space="small">
            {contributions.map(contribution => (
              <Card key={contribution.id}>
                <Text>{contribution.text} - {contribution.author}</Text>
              </Card>
            ))}
            <AddContribution storyId={story.id} />
            {error && <Text tone="critical">{error}</Text>}
            <Button onClick={handleGenerateContribution} disabled={loading}>
              {loading ? 'Generating...' : 'Generate Me a Contribution!'}
            </Button>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};

export default StoryDetails;
