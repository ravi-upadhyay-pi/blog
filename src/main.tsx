import React from 'react'
import ReactDOM from 'react-dom/client'
import { Resume } from './resume/Resume';
import { resumeData } from './resume/data';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {globalStyles} from './stitches.config';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume resume={resumeData}/>} />
        <Route path="/resume" element={<Resume resume={resumeData}/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
