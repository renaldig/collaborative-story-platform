import React from 'react';
import { Stack, Heading, Text } from 'braid-design-system';
import { useStories } from '../context/StoryContext';
import useFetch from '../hooks/useFetch';

const PopularStories = () => {
  const { data, loading, error } = useFetch('https://api.example.com/stories/popular');
  const { getPopularStories } = useStories();
  const popularStories = getPopularStories();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Stack space="medium">
      <Heading level="2">Popular Stories</Heading>
      <Stack space="small">
        {data ? (
          data.map(story => (
            <Text key={story.id}>{story.title} by {story.author} - Votes: {story.votes}</Text>
          ))
        ) : (
          popularStories.map(story => (
            <Text key={story.id}>{story.title} by {story.author} - Votes: {story.votes}</Text>
          ))
        )}
      </Stack>
    </Stack>
  );
};

export default PopularStories;
