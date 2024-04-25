//Pages
import { App } from './pages/app/App';

//Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// Styles
import './shared/styles/fonts.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
