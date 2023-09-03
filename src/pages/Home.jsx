import React from 'react'
import RightSidebar from "../components/page/home/RightSidebar/RightSidebar"
import ProfileHeroImages from '../components/page/home/ProfileHeroImages'
import CoinUpdateBar from '../components/page/home/CoinUpdateBar/CoinUpdateBar'


const Home = () => {
  return (
    <div className='relative z-0 w-full h-full p-3 !top-0'>
      
      <ProfileHeroImages/>
      {/* <RightSidebar /> */}
      <CoinUpdateBar/>
      
     
    </div>
  )
}

export default Home