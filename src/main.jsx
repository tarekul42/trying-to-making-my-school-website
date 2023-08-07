import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Campus from './Components/Campus/Campus.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Notice from './Components/Notice/Notice.jsx';
import Teachers from './Components/Teachers/Teachers.jsx';
import Students from './Components/Students/Students.jsx';
import Achievements from './Components/Achievements/Achievements.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/notice',
        element: <Notice/>
      },
      {
        path: '/campus',
        element: <Campus/>
      },
      {
        path: '/teachers',
        element: <Teachers/>
      },
      {
        path: '/students',
        element: <Students/>
      },
      {
        path: '/achievements',
        element: <Achievements/>
      },
      {
        path: '/blog',
        element: <Blog/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
