import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsFillSendFill} from "react-icons/bs"
import {BsQrCodeScan} from "react-icons/bs"
import {FaFingerprint} from "react-icons/fa"

const RightSidebar = () => {
  

  return (
    <aside className=''>
        <div className="absolute bottom-4 right-4 hello w-[110px] rounded glass-container">
            <div className="right-sidebar text-white w-[100%] ">
                <div className="right-sidebar__item flex flex-col gap-[15px] py-[20px] px-[30px] ">
                  <div className='text-center flex flex-col items-center'>
                      <span className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center duration-100 hover:text-colorprimary">
                      <BsFillSendFill className=' text-[25px] flex justify-center' />
                      </span>
                    <p className='text-[20px] pt-[10px]'>Send</p>
                  </div>
                  <div className='text-center flex flex-col items-center '>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center duration-100 hover:text-colorprimary">
                      <BsQrCodeScan className=' text-[25px]' />
                      </div>
                      <p className='text-[20px] pt-[10px]'>Receive</p>
                  </div>
                  <div className='text-center flex flex-col items-center'>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center duration-100 hover:text-colorprimary">
                      <FaFingerprint className=' text-[25px]' />
                      </div>
                      <p className='text-[20px] pt-[10px]'>Bridge</p>
                  </div>
                 
                </div>
            </div>
        </div>
    </aside>
  )
}

export default RightSidebar