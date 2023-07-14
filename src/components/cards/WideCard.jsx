import React from 'react'

const WideCard = ({ children }) => {
  return (
    <div className='w-[25rem] h-[8rem] mt-5 bg-white shadow-md rounded-md flex flex-col justify-center items-center'>
      {children}
    </div>
  )
}

export default WideCard
