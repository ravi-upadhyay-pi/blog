import React from 'react'
import ReactDOM from 'react-dom/client'
import {Resume} from './Resume';
import {Resume as resumeData} from './ResumeData';

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Resume resume={resumeData} />
  </React.StrictMode>,
)
