import React from 'react';
import { BraidProvider } from 'braid-design-system';
import wireframe from 'braid-design-system/themes/wireframe';
import { StoryProvider } from './context/StoryContext';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import MainComponent from './MainComponent';

const App = () => (
  <BraidProvider theme={wireframe}>
    <UserProvider>
      <ThemeProvider>
        <StoryProvider>
          <MainComponent />
        </StoryProvider>
      </ThemeProvider>
    </UserProvider>
  </BraidProvider>
);

export default App;
