import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import ReactDOM from 'react-dom/client';

import NavBar from './components/NavBar/NavBar';
import ThemeContextProvider from './components/ThemeContextProvider/ThemeContextProvider';

import './App.scss';

const App = () => (
  <ThemeContextProvider theme="light">
    <CssBaseline />
    <NavBar />
    <main>
      <div>Lorem ipsum</div>
    </main>
    <footer>Pokemon teams. 2024 </footer>
  </ThemeContextProvider>
);
const rootElement = document.getElementById('app');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
