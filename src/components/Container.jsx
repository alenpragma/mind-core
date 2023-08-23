import React { children } from 'react'

const Container = ({children}) => {
  return (
    <div className='container mx-auto'>{children}</div>
  )
}

export default Container