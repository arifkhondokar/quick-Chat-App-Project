import { Box, Grid } from '@mui/material'
import React from 'react'


const Login = () => {
  return (
    <>
    <Box>
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <div>
                    <h1>login page</h1>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div>
                  <h1>iamge</h1>
                </div>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default Login