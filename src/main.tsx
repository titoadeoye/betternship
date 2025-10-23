import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import QueryProvider from './lib/providers/QueryProvider.jsx';
import StoreProvider from './lib/providers/StoreProvider.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <QueryProvider>
        <App />
      </QueryProvider>
    </StoreProvider>
  </StrictMode>
);
