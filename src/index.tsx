import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, ReactReduxContext } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/lib/redux/store';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './pages/_routes';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import './index.css';

const container = document.getElementById('root')! as HTMLElement;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Provider store={store} context={ReactReduxContext}>
      <PersistGate persistor={persistor} onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 500))}>
        {(bootstrapped) => (
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        )}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
