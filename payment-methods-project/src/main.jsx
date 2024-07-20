import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css';
import Gallery from './Pages/Gallery.jsx';
import About from './Pages/About.jsx';
import Features from './Pages/Features.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Pages/Contact.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/features",
    element: <Features />,
    exact: true,
  },
  {
    path: "/gallery",
    element: <Gallery />,
    exact: true,
  },
  {
    path: "/about",
    element: <About />,
    exact: true,
  },
  {
    path: "/contact",
    element: <Contact />,
    exact: true,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  < RouterProvider router={router} />
)