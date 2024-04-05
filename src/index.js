// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import the main component
import MyApp from './Components/App';

// Render the main component inside the root element in the HTML
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <MyApp />
  </React.StrictMode>
);
