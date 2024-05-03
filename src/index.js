import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';

import App from './page/app';
import Navbar from './page/navbar';

function NotFound() {
  return (
    <img
      src="https://sitechecker.pro/wp-content/uploads/2023/06/404-status-code.png"
      style={{ width: '100%', height: 'auto'}}
    />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
