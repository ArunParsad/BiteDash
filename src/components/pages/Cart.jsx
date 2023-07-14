import React from 'react'
import Container from '../layout/Container'
import WideCard from '../cards/WideCard'
import { useGlobalContext } from '../context/Context'
import CartMenuList from '../cards/CartMenuList'

const Cart = () => {
  const { cart } = useGlobalContext()

  return (
    <Container>
      <main className='flex justify-between items-start'>
        <section className='bg-white shadow-md h-[65vh] w-[65rem] rounded-md mt-5 flex flex-col justify-start items-center px-5 py-[30px] space-y-2 overflow-scroll scrollbar-hide'>
          {cart.map((item) => (
            <CartMenuList {...item} key={item.id} />
          ))}
        </section>
        <section className='flex flex-col'>
          <WideCard></WideCard>
          <WideCard></WideCard>
          <WideCard></WideCard>
        </section>
      </main>
    </Container>
  )
}

export default Cart
