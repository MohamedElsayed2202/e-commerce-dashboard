import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/root-layout/RootLayout';
import AuthLayout from './layouts/auth-layout/AuthLayout';
import Login from './pages/login/login';
import Register from './pages/register/register';
import ThemeContextProvider from './contexts/theme-context';
import PathLoader from './components/PathLoader';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { loginAction, logoutAction } from './utils/actions';
// import { usersLoader } from './utils/loaders';
import Users from './pages/users/users';


const router = createBrowserRouter([
  {
    path: '/',
    element: <PathLoader><RootLayout /></PathLoader>,
    // loader: indexLoader,
    children: [
      {
        path: 'register',
        // index: true,
        element: <Register />,
      },
      {
        path: 'users',
        element: <Users />,
        // loader: usersLoader,
        // children: [
        //   {path: 'add', action: async({request, params}) => {
        //     const formdata = await request.formData();
        //     console.log(formdata.get('name'));
            
        //     return null
        //   }}
        // ]
        // loader: async () => {
        //   // NProgress.start();
        //   const fakeapicall = new Promise((resolve, reject) => {
        //     setTimeout(resolve, 5000)
        //   });
        //   await fakeapicall
        //   // NProgress.done()
        //   return null
        // } 
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
        action: loginAction
      },
      {
        path: 'logout',
        action: logoutAction
      }
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
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
