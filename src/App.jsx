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
import MyAssets from './pages/MyAssets';
import MindStaking from './pages/MindStaking';
import MindStakingHistory from './pages/MindStakingHistory';
import MusdStaking from './pages/MusdStaking';
import MusdStakingHistory from './pages/MusdStakingHistory';
import Merchant from './pages/Merchant';
import MyAffilates from './pages/MyAffilates';
import AddAffiliate from './pages/AddAffiliate';

let router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<SideNavBar/>}>
    <Route index element={<Home/>}/>
    <Route path='/buyFarming' element={<BuyFarming/>}/>
    <Route path='myAsset' element={<MyAssets/>}/>
    <Route path='mindstaking' element={<MindStaking/>}/>
    <Route path='mindStakingHistory' element={<MindStakingHistory/>}/>
    <Route path='musdstaking' element={<MusdStaking/>}/>
    <Route path='musdStakingHistory' element={<MusdStakingHistory/>}/>
    <Route path='merchant' element={<Merchant/>}/>
    <Route path='myAffiliate' element={<MyAffilates/>}/>
    <Route path='addAffiliate' element={<AddAffiliate/>}/>
  </Route>
))

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
