import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react';

const ListItemContent = ({icon, text, children}) => {
  return (
        <ListItem button >
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
            {children}
        </ListItem>
  )
}

export default ListItemContent