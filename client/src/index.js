import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';//Considerar uso
import { Provider } from 'react-redux';//Se importa Provider
import store from './redux/newstore/index.js';//Se importa a nuestro store

ReactDOM.render( //Punto 0: se dice que la propiedad store de Provider (la auténtica)
//tendrá como valor a nuestro store
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
