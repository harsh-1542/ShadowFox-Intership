import React from 'react'
import Cartitem from './Cartitem'
import { Button, Divider } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout =()=>{
    navigate("/checkout?step=2");

  }
  return (
    <div className='pt-5'>

      <div className='lg:grid grid-cols-3 lg:px-16 relative'>

        <div className='col-span-2'>
          {[1,1,1,].map((item)=><Cartitem />)}

        </div>
        <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
          <div className='border px-5 pb-5'>
            <p className='uppercase font-bold opacity-60  pt-4 pb-4'>Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-5'>

              <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹4697</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Disccount</span>
                <span className='text-green-600'>-₹3231</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'>₹1278</span>
              </div>

            </div>
            <hr />
            <Button  onClick={handleCheckout} variant="contained" className='w-full m-5 pb-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#8155fd" }}>
              Checkout
            </Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart