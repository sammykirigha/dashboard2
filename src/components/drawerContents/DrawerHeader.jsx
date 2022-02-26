import { IconButton, styled, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


const Header = ({onclick}) => {
  return (
    <DrawerHeader>
            <Typography variant='h6' >
              <span style={{color: 'black'}}>Vetrina</span>
              <span style={{color: 'blue'}}>live</span>
            </Typography>
            <IconButton onClick={onclick}>
              <MenuIcon /> 
            </IconButton>
    </DrawerHeader>
  )
}

export default Header
