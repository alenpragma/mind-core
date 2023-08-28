import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsFillSendFill} from "react-icons/bs"
import {BsQrCodeScan} from "react-icons/bs"
import {FaFingerprint} from "react-icons/fa"
 import{PiCurrencyBtcBold} from "react-icons/pi"
 import{AiOutlineArrowRight} from "react-icons/ai"

 import Col from 'react-bootstrap/Col';
 import Nav from 'react-bootstrap/Nav';
 import Row from 'react-bootstrap/Row';
 import Tab from 'react-bootstrap/Tab';


const RightSidebar = () => {
  // let [show,setShow] = useState(false)
  const [toggleTab, setToggleTab] = useState()

  return (
    <aside className=''>
      {/* transact open button start*/}
      {/* <div  className="fixed bottom-[10px] right-4 text-white flex items-center gap-x-1 text-[20px] font-semibold p-2 rounded-lg glass-container duration-100 group  cursor-pointer"><PiCurrencyBtcBold className='text-[25px] group-hover:text-colorprimary duration-100'/><span className='group-hover:text-colorprimary duration-100'>Transact</span> </div> */}
      {/* transact open button end */}
        <div className={`fixed z-10 bottom-[70px] right-4  duration-300   hello rounded glass-container`}>
        {!toggleTab &&
            <div className="right-sidebar text-white w-[100%] ">
              
                <div className="right-sidebar__item flex flex-col gap-[15px] py-[15px] px-[10px] ">
                  <Link onClick={()=>setToggleTab(!toggleTab)} className='text-center flex flex-col items-center no-underline text-[#fff] hover:text-colorprimary duration-100'>
                      <span className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <BsFillSendFill className=' text-[25px] flex justify-center' />
                      </span>
                    <p className='text-[18px] pt-[10px] m-0'>Send</p>
                  </Link>
                  <Link onClick={()=>setToggleTab(!toggleTab)}  className='text-center no-underline flex flex-col items-center text-[#fff] hover:text-colorprimary duration-100'>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <BsQrCodeScan className=' text-[25px]' />
                      </div>
                      <p className='text-[18px] pt-[10px] m-0'>Receive</p>
                  </Link>
                  <Link onClick={()=>setToggleTab(!toggleTab)}  className='text-center no-underline flex flex-col items-center text-[#fff] hover:text-colorprimary duration-100'>
                      <div className=" bg-[#fff3] relative w-[50px] h-[50px] rounded-full cursor-pointer flex justify-center items-center">
                      <FaFingerprint className=' text-[25px]' />
                      </div>
                      <p className='text-[18px] pt-[10px] m-0'>Bridge</p>
                  </Link>
                 
                </div>
              
            </div>
            }
            {toggleTab ?
            <div className="">
              <AiOutlineArrowRight onClick={()=>setToggleTab(!toggleTab)} />
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
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
                            <Tab.Pane eventKey="first">first tab content</Tab.Pane>
                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                            <Tab.Pane eventKey="third">third tab content</Tab.Pane>
                            <Tab.Pane eventKey="fourth">Second tab content</Tab.Pane>
                          </Tab.Content>
                        </Col>
                    
                </Tab.Container>
              </div>
              : ""
              }
        </div>
    </aside>
  )
}

export default RightSidebar