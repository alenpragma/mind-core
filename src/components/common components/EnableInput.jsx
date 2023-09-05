import React from 'react'

const EnableInput = ({title}) => {
  return (
    <div className='w-full flex rounded-md overflow-hidden font-semibold'>
        <div className="w-[50%] bg-white text-colorprimary text-center py-2">{title}</div>
        <input type="number"  className='w-[50%] text-center  bg-[#ffffff47] border-none outline-none  text-white'   />
    </div>
  )
}

export default EnableInput