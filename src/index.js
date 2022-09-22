import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './ui/App/App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
// import { HashRouter as Router } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename='/portfolio1'>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
