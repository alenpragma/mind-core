import React from 'react'

const DisabledInput = ({title,value}) => {
  return (
    <div className='w-full flex rounded-md overflow-hidden font-semibold'>
        <div className="w-[50%] bg-white text-colorprimary text-center py-2">{title}</div>
        <input type="text" disabled className='w-[50%] text-center text-white' value={value} />
    </div>
  )
}

export default DisabledInput