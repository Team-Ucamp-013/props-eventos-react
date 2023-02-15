import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './componentes/home';
import About from './componentes/about';
import Contacto from './componentes/contact';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children: [
      {
       path:'contacts/:contactid',
       element: <h1>Yo soy un hijo de mi papá Home</h1> 
      }
    ]
    
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'/contacto',
    element: <Contacto />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


