import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'


const orderStatus = [
    { lable: "On the Way", Value: "on_the_way" },
    { lable: "Delivered", Value: "delivered" },
    { lable: "Cancelled", Value: "cancelled" },
    { lable: "Returned", Value: "returned" },
]
const Order = () => {
    return (
        <div className='mt-10 px-15 lg:px-20'>
            <Grid container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className='h-auto shadow-lg bg-white p-5 sticky top-5 '>

                        <h1 className='font-bold text-lg'>Filter</h1>

                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>ORERD STATUS</h1>

                            {orderStatus.map((option) => <div className='flex items-center'>
                                <input defaultValue={option.Value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-5000' />
                                <label className="ml-3 text-sm text-gray-600" htmlFor={option.Value}>{option.lable}</label>

                            </div>)}

                        </div>
                    </div>
                </Grid>

                <Grid item xs={9.2}>
                    <div className='space-y-5'>

                    {[1,1,1,1,1,1].map((item)=><OrderCard />)}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Order