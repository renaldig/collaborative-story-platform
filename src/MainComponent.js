import React from 'react';
import StoryList from './components/StoryList';
import PopularStories from './components/PopularStories';
import { Box, Stack, Heading } from 'braid-design-system';
import ThemeToggler from './components/ThemeToggler';
import { useTheme } from './context/ThemeContext';
import useAuth from './hooks/useAuth'; 

const MainComponent = () => {
  const { theme } = useTheme();
  const { user, login, logout, loading } = useAuth();

  const handleLogin = () => {
    login('testuser', 'password123');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Box background="body" padding="gutter" className={`box ${theme}`}>
      <Stack space="large" align="center">
        <Heading level="1">Collaborative Story Writing Platform</Heading>
        <ThemeToggler />
        {loading ? (
          <div>Loading...</div>
        ) : user ? (
          <div>
            Welcome, {user.username}! <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
        <PopularStories />
        <StoryList />
      </Stack>
    </Box>
  );
};

export default MainComponent;
