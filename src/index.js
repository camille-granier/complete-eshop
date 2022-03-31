import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './redux/store'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider} from 'react-redux';
import { AuthContextProvider } from './redux/context/auth-context';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
    <Provider store = {store}>
      <App />
    </Provider>
  </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
