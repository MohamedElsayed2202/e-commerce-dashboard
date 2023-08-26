import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import RootLayout from './layouts/root-layout/RootLayout';
import AuthLayout from './layouts/auth-layout/AuthLayout';
import Login from './pages/login/login';
import Register from './pages/register/register';



const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
  },
  {
    path: 'auth',
    element: <AuthLayout/>,
    children: [
      {
        index: true,
        element: <Login/>,
      },
      {
        path: 'register',
        element: <Register/>,
      },
      // {
      //   path: '/forgot-password',
      //   element: <AuthLayout/>,
      // },
      
    ]
  }
])





const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
