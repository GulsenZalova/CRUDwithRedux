import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import crudStore from "./store/reducers/store"
// import { applyMiddleware,createStore } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './store/reducers';
// const crudStore = createStore(reducers, applyMiddleware(thunk));
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={crudStore} >
      <App />
    </Provider>
  </BrowserRouter>
)
