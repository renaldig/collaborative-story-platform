import 'braid-design-system/reset'; // <-- Must be first
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import { StoryProvider } from './context/StoryContext';
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BraidProvider theme={apac}>
    <StoryProvider>
      <App />
    </StoryProvider>
  </BraidProvider>
);
