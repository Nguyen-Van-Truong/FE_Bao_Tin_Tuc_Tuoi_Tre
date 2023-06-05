import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {webRouter} from "./Router/web";
import {RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={webRouter}>

      </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
