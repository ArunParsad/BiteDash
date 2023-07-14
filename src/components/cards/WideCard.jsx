import React from 'react'

const WideCard = ({ children }) => {
  return (
    <div className='w-[25rem] h-[8rem] mt-5 bg-white shadow-md rounded-md'>
      {children}
    </div>
  )
}

export default WideCard
