import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import SideNavBar from './components/common components/SideNavBar';
import About from './pages/About';
import Home from './pages/Home';

let router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<SideNavBar/>}>
    <Route index element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
