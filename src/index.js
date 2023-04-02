import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/team-project-so-yummy-frontend'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
