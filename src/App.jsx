import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import SideNavBar from './components/common components/SideNavBar';

import Home from './pages/Home';
import BuyFarming from './pages/BuyFarming';

let router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<SideNavBar/>}>
    <Route index element={<Home/>}/>
    <Route path='/buyFarming' element={<BuyFarming/>}/>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
