import React from 'react';
import ReactDOM from 'react-dom/client';
import { Posts } from './blog/Posts';
import { Resume } from './resume/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { globalStyles } from './styles';
import { PostPage } from './blog/Post';
import { NotFound } from './NotFound';

globalStyles();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/blog/:id" element={<PostPage />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
