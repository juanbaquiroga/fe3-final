import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context from './Context/Context';
import { BrowserRouter } from 'react-router-dom';
import "./styles/_globals.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
            <Context>
                <App/>
            </Context>
        </BrowserRouter>
  </React.StrictMode>
);


