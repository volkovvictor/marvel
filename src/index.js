import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MarvelService from './services/MarvelService';

const marvelService = new MarvelService();

marvelService.getAllCharacters().then(res => console.log(res))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
