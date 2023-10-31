import React from 'react';
import ReactDOM from 'react-dom/client';
import { Posts } from './blog/Posts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PostPage } from './blog/Post';
import { NotFound } from './NotFound';
import { themeClass } from './styles.css';

const rootElement = document.getElementById('root') as HTMLElement;
rootElement?.classList.add(themeClass);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/blog/:id" element={<PostPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
