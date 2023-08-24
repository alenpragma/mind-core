import React from 'react'
import { Link } from 'react-router-dom'
import {BsFillSendFill} from "react-icons/bs"
import {BsQrCodeScan} from "react-icons/bs"
import {FaFingerprint} from "react-icons/fa"

const RightSidebar = () => {
  return (
    <aside className='relative'>
        <div className="absolute top-[20px] right-[20px] w-[5%]">
            <div className="right-sidebar text-white w-[100%] ">
                <div className="right-sidebar__item flex flex-col gap-[20px] p-[20px] rounded bg-[#1A1A1C]">
                  <div className='text-center flex flex-col items-center'>
                      <div className=" bg-[#3C3C3E] relative w-[50px] h-[50px] rounded-full">
                      <BsFillSendFill className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[30px]' />
                      </div>
                    Send
                  </div>
                  <div className='text-center flex flex-col items-center'>
                      <div className=" bg-[#3C3C3E] relative w-[50px] h-[50px] rounded-full">
                      <BsQrCodeScan className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[30px]' />
                      </div>
                      Receive
                  </div>
                  <div className='text-center flex flex-col items-center'>
                      <div className=" bg-[#3C3C3E] relative w-[50px] h-[50px] rounded-full">
                      <FaFingerprint className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[30px]' />
                      </div>
                      Bridge
                  </div>
                 
                </div>
            </div>
        </div>
    </aside>
  )
}

export default RightSidebar