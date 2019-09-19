import React from 'react';
import ReactDOM from 'react-dom';
import './semantic/semantic-dark-theme/dist/semantic.min.css';
import { BreakpointProvider } from 'react-socks';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BreakpointProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </BreakpointProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
