import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import About from './component/pages/About.jsx'
import Contact from './component/pages/Contact.jsx'
import Root from './component/layers/Root.jsx'
import Home from './component/pages/Home';
import Faq from './component/pages/Faq';
import Services from './component/pages/Services';
import Learn from './component/pages/Learn';
import Error from './component/pages/Error';
import Product from './component/pages/Product-Details';
import Products from './component/pages/Products';
import Cart from './component/layers/Cart';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/shop' element={<Products />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/faq' element={<Faq />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/cart/:id' element={<Cart />}></Route>
      <Route path='/lern' element={<Learn />}></Route>
      <Route path='/products/details/:id' element={<Product />}></Route>
      <Route path='*' element={<Error />}/>
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
