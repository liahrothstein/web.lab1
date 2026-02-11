import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { routes } from './app/routes.tsx';

import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </StrictMode>,
)
