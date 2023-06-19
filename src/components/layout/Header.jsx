import React from 'react'
import Container from './Container'
import { BiSearch } from 'react-icons/bi'
import { BsFillBucketFill } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0'>
          <div className='flex justify-center items-center flex-col md:flex-row'>
            <img
              src='https://ik.imagekit.io/uuxn3oqcr/BiteDash/food-delivery-company-logo-concept-delivery-logo-vector_157839-415_cleanup-removebg-preview__1__mj3kmX2oe.png?updatedAt=1687172642612'
              alt=''
              className='w-20'
            />
            <h2>
              Bite<span className='font-bold'>Dash</span>
            </h2>
          </div>
          <div className='flex justify-center space-x-5 items-center'>
            <div className='flex bg-white justify-center items-center py-3 px-5 rounded-full'>
              <input
                type='text'
                placeholder='Search'
                className='focus:outline-none'
              />
              <BiSearch className='text-2xl hover:cursor-pointer hover:scale-110 transition-all duration-100' />
            </div>
            <div>
              <BsFillBucketFill className='text-4xl text-[#F77132]' />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
