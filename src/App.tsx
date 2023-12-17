import { create, props } from '@stylexjs/stylex';
import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BlogPage } from './blog/BlogPage';
import { ListPage as BlogListPage } from './blog/ListPage';
import './css-reset.css';
import { Resume } from './resume/Resume';

const reactRoot = getReactRoot();
reactRoot.render(<App />);

function getReactRoot() {
  const rootHtmlElement = document.getElementById('app');
  if (!rootHtmlElement) {
    throw new Error('No root element found');
  }
  const root: Root = createRoot(rootHtmlElement);
  return root;
}

function App() {
  return (
    <StrictMode>
      <div {...props(appStyle.app)}>
        <RouterProvider router={getRouter()} />
      </div>
    </StrictMode>
  );
}

function getRouter() {
  return createBrowserRouter([
    {
      path: '/',
      element: <BlogListPage />,
    },
    {
      path: '/blog',
      element: <BlogListPage />,
    },
    {
      path: '/blog/:id',
      element: <BlogPage />,
    },
    {
      path: '/resume',
      element: <Resume />,
    },
    {
      path: '*',
      element: <div>Not Found</div>,
    },
  ]);
}

const appStyle = create({
  app: {
    background: 'white',
    color: 'black',
    display: 'flex',
    font: '14px Fira Sans, sans-serif',
    fontSynthesis: 'none',
    justifyContent: 'center',
    lineHeight: '20px',
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
  },
});
