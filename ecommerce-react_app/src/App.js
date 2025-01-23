import logo from './logo.svg';
import './App.css';
import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './components/products/Product';
import Navbar from './components/Navbar';
import SearchComponent from './components/products/SearchComponent';


// Creating routes
const routes = createBrowserRouter([
  {
    path:"/products",
    element:<> <Navbar/> <Product/></>
  },
  {
    path:"/",
    element:<> <Navbar/> </>
  },
  {
    path: "/search-products",
    element: <> <SearchComponent/> </>
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
