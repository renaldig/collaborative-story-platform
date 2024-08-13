import React, { useState } from 'react';
import { useStories } from '../context/StoryContext';
import { Button, Stack, TextField, Textarea, Text } from 'braid-design-system';

const AddContribution = ({ storyId }) => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const { addContribution, error } = useStories();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContribution(storyId, text, author);
    setText('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Text tone="critical">{error}</Text>}
      <Stack space="medium">
        <TextField label="Author" onChange={event => setAuthor(event.currentTarget.value)} value={author} />
        <Textarea label="Your contribution" onChange={event => setText(event.currentTarget.value)} value={text} />
        <Button type="submit">Add Contribution</Button>
      </Stack>
    </form>
  );
};

export default AddContribution;
