import { Box, CssBaseline, Grid, Link } from '@mui/material'
import React from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './Hero.css'

const HeroSection = () => {
  return (
    <Box sx={{ display: 'flex' }}>
     <CssBaseline />
      <Grid container  >
          <Grid item xs={12} xl={12} md={12}  >
              <div className='background'>
                  <h3 data-testid='hero'>Welcome Samuel!</h3>
                  <div className='right'>
                      <Link className='hero-link'>app.vetrinalive.it/fenoh-store</Link>
                      <OpenInNewIcon className='hero-icon' />
                  </div>
              </div>
          </Grid>
      </Grid>
    </Box>
  )
}

export default HeroSection