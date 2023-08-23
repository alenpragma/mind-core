import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import RootLayout from './components/common components/RootLayout';

let router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout/>}>
    
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
