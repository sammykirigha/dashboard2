import { Badge } from '@mui/material'
import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';



const Header = ({title, link}) => {
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', width: '100%'}}>
     <span>{title}</span>
     <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between',}}>
        <PlaceIcon />
        <Badge badgeContent={2} color="secondary">
        <span>{link}</span>
        </Badge>
     </div>
     
</div>
  )
}

export default Header