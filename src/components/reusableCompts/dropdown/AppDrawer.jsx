import { Box, Drawer } from '@mui/material'
import React from 'react'
import ListContainer from '../../drawerContents/list/List'

const drawerWidth = 270;

const drawStyles = {
    width: drawerWidth,
    height: '1000px',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
    },
    scrollBehavior: 'smooth',
    overflowAnchor:'none'
}

const AppDrawer = ({open, handleDrawerClose}) => {
  return (
        <Drawer
            style={drawStyles}
            variant="persistent"
            anchor="left"
            open={open}
        >
        <ListContainer handleDrawerClick={handleDrawerClose} />
        </Drawer>
  )
}

export default AppDrawer



