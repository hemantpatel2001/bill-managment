import React from 'react'

import { RouterProvider } from 'react-router-dom';

import router from './Roter/routing';
import { Provider } from 'react-redux';
import { store } from './api/store/store';
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (

    <div>

          <Provider store={store}>
      <div>
        <RouterProvider router={router} />
        <ToastContainer/>
      </div>
    </Provider>

    </div>
  );
};


export default App

