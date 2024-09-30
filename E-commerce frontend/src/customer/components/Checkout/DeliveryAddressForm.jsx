import { Box, Button, Grid, } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

import AddressCard from '../AdressCard/AddressCard'

const DeliveryAddressForm = () => {

        const handleSubmit=(e)=>{
            e.preventDefault();
        
            const data= new FormData(e.currentTarget);
            const address= {
                firstName:data.get("firstName"),
                lastName:data.get("lastName"),
                Address:data.get("address"),
                city:data.get("city"),
                state:data.get("state"),
                zipcode:data.get("zip"),
                mobile:data.get("phoneNumber")
            }
            console.log("address",address);


        }
    return (

        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>

                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253)", color: "white" }} size='large' variant='contained'>Deliver Here</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5 ">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3} >
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="firstName" label="First Name" name="firstName" fullWidth autoComplete="given-name" />


                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="lastName" label="Last Name" name="lastName" fullWidth autoComplete="given-name" />


                                </Grid>
                                <Grid item xs={12} >
                                    <TextField required id="address" label="Address" name="address" fullWidth autoComplete="given-name" multiline rows={4} />


                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required id="city" label="City" name="city" fullWidth autoComplete="given-name" />


                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required id="state" label="State/Province/Region" name="state" fullWidth autoComplete="given-name" />


                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField required id="zip" label="Zip / Postal Code" name="zip" fullWidth autoComplete="shipping postal-code" />


                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField required id="phoneNumber" label="Phone Number" name="phoneNumber" fullWidth autoComplete="given-name" />


                                </Grid>

                                <Grid item xs={12} sm={6}>
                                <Button sx={{py:1.5, mt: 2, bgcolor: "RGB(145 85 253)", color: "white" }} size='large' type='submit' variant='contained'>Deliver Here</Button>


                                </Grid>

                            </Grid>
                        </form>

                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm