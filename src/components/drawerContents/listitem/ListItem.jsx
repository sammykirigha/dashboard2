import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react';
import './draw.css'
const ListItemContent = ({icon, text, children}) => {

  return (
      <Box className='listitem'>
        <ListItem button>
          <ListItemIcon style={{color: '#103B66'}} >
              {icon}
          </ListItemIcon>
          <ListItemText className='listitem-text' secondary={text} />
            {children}
        </ListItem>
      </Box>
  )
}

export default ListItemContent