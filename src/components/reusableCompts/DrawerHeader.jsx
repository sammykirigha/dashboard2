import { Box, IconButton } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import image5 from '../../images/logo.png'

const Drawerstyles = {
  padding: '15px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}


const Header = ({handleClick}) => {
  return (
      <Box style={Drawerstyles}>
          <Box>
              <img style={{height: '17px'}} src={image5} alt="logo" />
          </Box>
          <IconButton onClick={handleClick}>
              <MenuIcon />
          </IconButton>
      </Box>
  )
}

export default Header



