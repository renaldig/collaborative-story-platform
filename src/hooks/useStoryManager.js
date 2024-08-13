import { useState, useEffect } from 'react';

const useStoryManager = () => {
  const [stories, setStories] = useState(JSON.parse(localStorage.getItem('stories')) || []);
  const [contributions, setContributions] = useState(JSON.parse(localStorage.getItem('contributions')) || []);
  const [votes, setVotes] = useState(JSON.parse(localStorage.getItem('votes')) || {});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem('stories')) {
      const initialStories = [
        { id: 1, title: 'The Mysterious Forest', author: 'Alice' },
        { id: 2, title: 'Journey to the Stars', author: 'Bob' },
      ];
      setStories(initialStories);
      localStorage.setItem('stories', JSON.stringify(initialStories));
    }
    if (!localStorage.getItem('contributions')) {
      const initialContributions = [
        { id: 1, storyId: 1, text: 'Once upon a time...', author: 'Carol' },
        { id: 2, storyId: 2, text: 'In a galaxy far away...', author: 'Dave' },
      ];
      setContributions(initialContributions);
      localStorage.setItem('contributions', JSON.stringify(initialContributions));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('stories', JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    localStorage.setItem('contributions', JSON.stringify(contributions));
  }, [contributions]);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  const addContribution = (storyId, text, author) => {
    if (!text || !author) {
      setError('Both author and contribution text are required.');
      return;
    }
    const newContribution = { id: contributions.length + 1, storyId, text, author };
    setContributions([...contributions, newContribution]);
    setError(null);
  };

  const voteContribution = (contributionId, voteType) => {
    setVotes({
      ...votes,
      [contributionId]: votes[contributionId] ? votes[contributionId] + voteType : voteType,
    });
  };

  const getStoryContributions = (storyId) => {
    return contributions.filter(contribution => contribution.storyId === storyId);
  };

  const getPopularStories = () => {
    return stories.map(story => ({
      ...story,
      votes: contributions
        .filter(contribution => contribution.storyId === story.id)
        .reduce((total, contribution) => total + (votes[contribution.id] || 0), 0),
    })).sort((a, b) => b.votes - a.votes);
  };

  return { stories, addContribution, voteContribution, getStoryContributions, getPopularStories, error };
};

export default useStoryManager;
