import { Box, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { blue } from '@mui/material/colors';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListItem.css'

const ListItemContent = ({icon, text, children, to}) => {
  const navigate = useNavigate();

  return (
      <Box className='listitem-box'>
        <ListItem button onClick={()=>{
          navigate(to)
        }} className='listitem' >
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