import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

setTimeout(function() {
  var el = document.getElementById('app-loading');
  if (el) el.style.display = 'none';
}, 100);

if ((window as any).__hideLoading) (window as any).__hideLoading();

