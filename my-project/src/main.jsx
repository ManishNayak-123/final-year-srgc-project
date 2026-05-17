import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import { BrowserRouter } from 'react-router'
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import  {store , persistor}  from './Redux/store.js'
import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// const persistor = persistStore(store);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     
    <BrowserRouter>
   <GoogleOAuthProvider clientId="852903178128-h5gsqq1kkhcsjdqvu6bin2gj84s2m78v.apps.googleusercontent.com">
      <Provider store = {store} >
        <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
      <ToastContainer />
        </GoogleOAuthProvider>
    </BrowserRouter>
  
  
  </React.StrictMode>,
)
