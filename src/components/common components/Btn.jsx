import React from 'react'

const Btn = ({onClick,title,bg}) => {
  return (
    <div className={`py-[10px]  rounded-md px-[25px] ${bg?"bg-colorprimary":"glass-container"} font-semibold duration-200 hover:bg-colorprimary text-white hover:text-colorprimary`} onClick={onClick}>{title}</div>
  )
}

export default Btn   