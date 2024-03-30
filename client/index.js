import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './component/App.js';
import './style.css';

const Content = () => {
  return <div>'hello'</div>;
};

const root = createRoot(document.getElementById('root'));
root.render(<App />);
