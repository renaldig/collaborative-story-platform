import { useState } from 'react';
import { useStories } from '../context/StoryContext';

const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

const useGenerateContribution = () => {
  // Define loading and error state using useState
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { addContribution } = useStories(); // Retrieve addContribution from the StoryContext

  const generateContribution = async (storyId, author) => {
    setLoading(true);
    setError(null);

    try {
      // Fetch previous contributions for the story
      const contributions = JSON.parse(localStorage.getItem('contributions')) || [];
      const storyContributions = contributions
        .filter(contribution => contribution.storyId === storyId)
        .map(contribution => contribution.text)
        .join(' ');

      if (!storyContributions) {
        throw new Error("No previous contributions found for this story.");
      }
      console.log(process.env.REACT_APP_OPENAI_API_KEY);
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: `Extend the story: "${storyContributions} and end your text with three trailing fullstops; do not repeat what was already in the story, just continue it and by one sentence."` }],
          max_tokens: 50,
        }),
      });

      const data = await response.json();
      const generatedText = data.choices[0]?.message?.content.trim() || '...';

      // Add the generated contribution to the story
      addContribution(storyId, generatedText, author);

    } catch (err) {
      setError('Failed to generate contribution.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { generateContribution, loading, error };
};

export default useGenerateContribution;
