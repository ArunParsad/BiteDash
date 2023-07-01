import React, { useState } from 'react'
import Container from './Container'
import { BiSearch } from 'react-icons/bi'
import { BsFillBucketFill } from 'react-icons/bs'
import { useGlobalContext } from '../context/Context'
import { Link } from 'react-router-dom'

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const { dispatch } = useGlobalContext()
  return (
    <>
      <Container>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-5 md:space-y-0'>
          <Link to={'/'}>
            <div
              className='flex justify-center items-center flex-col md:flex-row hover:cursor-pointer'
              onClick={() => {
                dispatch({ type: 'RESET_UI' })
              }}
            >
              <img
                src='https://ik.imagekit.io/uuxn3oqcr/BiteDash/food-delivery-company-logo-concept-delivery-logo-vector_157839-415_cleanup-removebg-preview__1__mj3kmX2oe.png?updatedAt=1687172642612'
                alt=''
                className='w-20 '
              />
              <h2>
                Bite<span className='font-bold'>Dash</span>
              </h2>
            </div>
          </Link>
          <div className='flex justify-center space-x-5 items-center'>
            <form
              className='flex bg-white justify-center items-center py-3 px-5 rounded-full'
              onSubmit={(e) => {
                e.preventDefault()
                dispatch({ type: 'FILTER_FEED', payload: searchText })
                setSearchText('')
              }}
            >
              <input
                type='text'
                placeholder='Search'
                className='focus:outline-none'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
              />
              <BiSearch className='text-2xl' />
            </form>
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
