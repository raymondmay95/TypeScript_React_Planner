import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider, TypedUseSelectorHook, useSelector} from 'react-redux'
import './index.css';
import App from './App';
import { useDispatch } from "react-redux";

import configureStore from './store';
import { restoreCSRF, csrfFetch } from "./store/csrf";
import * as sessionActions from "./store/session";

const store = configureStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  // @ts-ignore
  window.csrfFetch = csrfFetch;
  // @ts-ignore
  window.store = store;
  // @ts-ignore
  window.sessionActions = sessionActions;
}


const Root = () => {
  const useAppDispatch: AppDispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
  return (
      <BrowserRouter>
        <App useAppSelector={useAppSelector} useAppDispatch={useAppDispatch} />
      </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
