import logo from './logo.svg';
import './App.css';
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './components/products/Product';
import Navbar from './components/Navbar';

// Creating routes
const routes = createBrowserRouter([

  {
    path:"/products",
    element:<> <Product/> <Navbar/></>
  },

  {
    path:"/",
    element:<> <Navbar/> </>
  }

])
function App() {
  return (

    <div className="">

      <RouterProvider router={routes}/>

    </div>
  
  );
}

export default App;
