import React from 'react'
import ReactDOM from 'react-dom/client'
import { Resume } from './Resume';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {globalStyles} from './stitches.config';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
