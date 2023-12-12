import { Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <>

    {/* <div>
        <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2'>
            <div>1</div>
            <div className='col-span-3'>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
        </div>
    </div> */}
    <Stack sx={{}}>
        <Stack sx={{p:4, }}>
            <Grid container>
                <Grid item xs={12} lg={6} md={6} sm={6}>
                    <Stack>
                    <img src='../../../Assets/images/lock.jpg' alt='image not found' height="auto"  />
                    </Stack>
                </Grid>
                <Grid item xs={12} lg={6} md={6} sm={6}>
                    <Stack sx={{gap:2, p:4}}>
                        <Stack>
                            <Typography sx={{fontSize:"32px"}}>Login</Typography>
                        </Stack>
                    <Stack sx={{}}>
                        <Stack sx={{alignItems:"flex-start"}}>
                          <Typography>UserName</Typography>
                        </Stack>  
                        <TextField fullWidth />
                    </Stack>
                    <Stack sx={{}}>
                        <Stack sx={{alignItems:"flex-start"}}>
                          <Typography >Password</Typography>
                        </Stack>
                    <TextField  />
                    </Stack>
                    <Button>Submit</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    </Stack>
    {/* <form onSubmit={handleSubmit(onSubmit)}>
      <TextField 
        {...register("firstName", { required: true })} 
        aria-invalid={errors.firstName ? "true" : "false"} 
      />
      {errors.firstName?.type === 'required' && <p role="alert" className='text-red-500'>First name is required</p>}

      <TextField 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert" className='text-red-500'>{errors.mail?.message}</p>}
      
      <button type={onSubmit}></button>
    </form> */}
    </>
  )
}

export default Login