import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/root-layout/RootLayout';
import AuthLayout from './layouts/auth-layout/AuthLayout';
import Login, { loginEventAction } from './pages/login/login';
import Register from './pages/register/register';
import ThemeContextProvider from './contexts/theme-context';
import PathLoader from './components/PathLoader';



const router = createBrowserRouter([
  {
    path: '/',
    element: <PathLoader><RootLayout /></PathLoader>,
    children: [
      {
        // path: 'register',
        index: true,
        element: <Register />,
      },
      {
        path: 'users',
        element: <Register />,
      },
    ]
  },
  {
    path: 'auth',
    element: <PathLoader><AuthLayout /></PathLoader>,
    children: [
      {
        index: true,
        element: <Login />,
        action: loginEventAction
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
    <ThemeContextProvider> 
      <RouterProvider router={router} />
    </ThemeContextProvider>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
