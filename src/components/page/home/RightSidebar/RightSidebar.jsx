import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsFillSendFill} from "react-icons/bs";
import {BsQrCodeScan} from "react-icons/bs";
import {FaFingerprint} from "react-icons/fa";
 import{PiCurrencyBtcBold} from "react-icons/pi";
 import{BiChevronsRight} from "react-icons/bi";
 import{BsPlusLg} from "react-icons/bs";

 import Col from 'react-bootstrap/Col';
 import Nav from 'react-bootstrap/Nav';
 import Row from 'react-bootstrap/Row';
 import Tab from 'react-bootstrap/Tab';

 import "./index.css"


const RightSidebar = () => {
  // let [show,setShow] = useState(false)
  const [toggleTab, setToggleTab] = useState()

  // const handleClick {
    
  // }

  return (
    <>
      <button className='absolute bottom-[20px] right-[15px]  translate-y-[-20px] text-white glass-container  rounded-full p-[15px] md:hidden block' onClick={()=>setToggleTab(!toggleTab)}>
        <BsPlusLg className='text-[25px]' />
        </button>      {/* transact open button start*/}
      {/* <div  className="fixed bottom-[10px] right-4 text-white flex items-center gap-x-1 text-[20px] font-semibold p-2 rounded-lg glass-container duration-100 group  cursor-pointer"><PiCurrencyBtcBold className='text-[25px] group-hover:text-colorprimary duration-100'/><span className='group-hover:text-colorprimary duration-100'>Transact</span> </div> */}
      {/* transact open button end */}
        <div className={`absolute bottom-[15%] md:bottom-[5%]  right-[15px] translate-y-[15%] md:translate-y-[-5%]  duration-300 rounded glass-container`}>
            <div className="right-sidebar text-white w-[100%] hidden md:block">
              {!toggleTab &&
                <div className="right-sidebar__item flex flex-col gap-[15px] py-[15px] px-[10px] ">
                  <Link onClick={()=>setToggleTab(!toggleTab)} className={`${toggleTab ? "duration-500" : ""} text-center flex flex-col items-center no-underline text-[#fff] hover:text-colorprimary duration-100`}>
                      <span className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <BsFillSendFill className=' text-[25px] flex justify-center' />
                      </span>
                    <p className='text-[16px] pt-[10px] m-0'>Send</p>
                  </Link>
                  <Link onClick={()=>setToggleTab(!toggleTab)}  className='text-center no-underline flex flex-col items-center text-[#fff] hover:text-colorprimary duration-100'>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <BsQrCodeScan className=' text-[25px]' />
                      </div>
                      <p className='text-[16px] pt-[10px] m-0'>Receive</p>
                  </Link>
                  <Link onClick={()=>setToggleTab(!toggleTab)}  className='text-center no-underline flex flex-col items-center text-[#fff] hover:text-colorprimary duration-100'>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <FaFingerprint className=' text-[25px]' />
                      </div>
                      <p className='text-[16px] pt-[10px] m-0'>Bridge</p>
                  </Link>
                 
                </div>
              }
            </div>
        </div>
        {toggleTab ?
            <div className="absolute bottom-[20px] md:bottom-[5%] right-[15px] translate-y-[20px] md:translate-y-[-5%] glass-container animation-box">
                <div className="text-white text-[25px] py-[20px] ml-2 ">
                <BiChevronsRight onClick={()=>setToggleTab(!toggleTab)} className='text-white cursor-pointer' />
                </div>
                <Tab.Container id="left-tabs-example" className="" defaultActiveKey="first">
                          <div className="">
                        
                          <Nav variant="pills" className="">
                            <Nav.Item className=''>
                              <Nav.Link eventKey="first">
                              <Link className='text-center flex flex-col items-center no-underline text-[#fff] hover:text-colorprimary duration-100'>
                                  <span className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                                  <BsFillSendFill className=' text-[25px] flex justify-center' />
                                  </span>
                                <p className='text-[18px] pt-[10px] m-0'>Send</p>
                              </Link>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">
                              <Link  className='text-center no-underline flex flex-col items-center text-[#fff] hover:text-colorprimary duration-100'>
                                  <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                                  <BsQrCodeScan className=' text-[25px]' />
                                  </div>
                                  <p className='text-[18px] pt-[10px] m-0'>Receive</p>
                              </Link>
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">
                                <Link  className='text-center no-underline flex flex-col items-center text-[#fff] hover:text-colorprimary duration-100'>
                                    <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                                    <FaFingerprint className=' text-[25px]' />
                                    </div>
                                    <p className='text-[18px] pt-[10px] m-0'>Bridge</p>
                                </Link>
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                          </div>
                        
                        <Col >
                          <Tab.Content>
                            <Tab.Pane eventKey="first" className='text-center text-white'>
                              <p>Continue with…</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className='text-center text-white'>
                              <p>Continue with…</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" className='text-center text-white'>
                            <p>Continue with…</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth" className='text-center text-white'>
                            <p>Continue with…</p>
                            </Tab.Pane>
                          </Tab.Content>
                        </Col>
                    
                </Tab.Container>
              </div>
              : ""
              }
    </>
  )
}

export default RightSidebar