import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockedResponse = [
          { id: 1, title: 'The Mysterious Forest', author: 'Alice', votes: 5 },
          { id: 2, title: 'Journey to the Stars', author: 'Bob', votes: 3 }
        ];

        setData(mockedResponse);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
