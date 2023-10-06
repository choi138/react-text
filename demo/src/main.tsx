import React from 'react';
import ReactDOM from 'react-dom/client';

import { globalStyle } from './styles';
import { App } from './App';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Global styles={[globalStyle]} />
    <App />
  </React.StrictMode>,
);
