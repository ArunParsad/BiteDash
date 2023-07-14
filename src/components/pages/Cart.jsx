import React, { useEffect } from 'react'
import Container from '../layout/Container'
import WideCard from '../cards/WideCard'
import { useGlobalContext } from '../context/Context'
import CartMenuList from '../cards/CartMenuList'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, dispatch, totalAmount } = useGlobalContext()

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL_AMOUNT' })
  }, [cart])

  if (cart.length > 0) {
    return (
      <Container>
        <main className='flex justify-between items-start'>
          <section className='bg-white shadow-md h-[65vh] w-[65rem] rounded-md mt-5 flex flex-col justify-start items-center px-5 py-[30px] space-y-2 overflow-scroll scrollbar-hide'>
            {cart.map((item) => (
              <CartMenuList {...item} key={item.id} />
            ))}
          </section>
          <section className='flex flex-col'>
            <WideCard>
              <div className='flex justify-around items-center space-x-20'>
                <h2 className='text-3xl font-bold text-gray-600'>To Pay</h2>
                <h2 className='text-3xl font-bold text-gray-600'>
                  ₹ {totalAmount}
                </h2>
              </div>
            </WideCard>
            <WideCard></WideCard>
            <WideCard></WideCard>
          </section>
        </main>
      </Container>
    )
  } else {
    return (
      <Container>
        <div className='w-[80vw] h-[80vh] bg-white shadow-md rounded-md mx-auto mt-10 flex flex-col justify-center items-center space-y-2'>
          <main className='flex flex-col justify-center items-center mb-20'>
            <img
              src='https://ik.imagekit.io/uuxn3oqcr/BiteDash/undraw_shopping_app_flsj_XBA4umRyo.png?updatedAt=1689349895919'
              alt=''
              className='w-[30rem]'
            />
            <h2 className='text-4xl font-bold text-gray-600'>Cart is Empty!</h2>
            <Link to={'/'}>
              <button className='mt-10 text-lg'>Go to home</button>
            </Link>
          </main>
        </div>
      </Container>
    )
  }
}

export default Cart
