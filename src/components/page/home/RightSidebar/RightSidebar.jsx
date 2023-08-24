import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsFillSendFill} from "react-icons/bs"
import {BsQrCodeScan} from "react-icons/bs"
import {FaFingerprint} from "react-icons/fa"

const RightSidebar = () => {
  

  return (
    <aside className=''>
        <div className="fixed z-10 bottom-4 right-4 hello rounded glass-container">
            <div className="right-sidebar text-white w-[100%] ">
                <div className="right-sidebar__item flex flex-col gap-[15px] py-[15px] px-[10px] ">
                  <div className='text-center flex flex-col items-center hover:text-colorprimary duration-100'>
                      <span className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <BsFillSendFill className=' text-[25px] flex justify-center' />
                      </span>
                    <p className='text-[18px] pt-[10px] m-0'>Send</p>
                  </div>
                  <div className='text-center flex flex-col items-center  hover:text-colorprimary duration-100'>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <BsQrCodeScan className=' text-[25px]' />
                      </div>
                      <p className='text-[18px] pt-[10px] m-0'>Receive</p>
                  </div>
                  <div className='text-center flex flex-col items-center hover:text-colorprimary duration-100'>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <FaFingerprint className=' text-[25px]' />
                      </div>
                      <p className='text-[18px] pt-[10px] m-0'>Bridge</p>
                  </div>
                 
                </div>
            </div>
        </div>
    </aside>
  )
}

export default RightSidebar