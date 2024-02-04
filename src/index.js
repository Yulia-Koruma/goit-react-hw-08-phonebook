import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import 'animate.css';

const theme = {
  colors: {
    background: 'rgba(255, 235, 205, 0.15)',
    green: '#008000',
    red: '#FF0000',
    black: '#2a2a2a',
    pink: '#C71585',
    white: '#FFFAFA',
    grey: '#4a5c58',
    purple: '#800080',
    lightgray: 'rgba(255, 255, 224, 0.10)',
    lightblue: 'rgba(175, 238, 238, 0.30)',
    active: '#F08080',
  },
  radii: {
    sm: '4px',
    md: '12px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);