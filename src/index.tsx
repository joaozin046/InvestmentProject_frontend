import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
