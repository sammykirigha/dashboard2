import { Badge } from '@mui/material'
import React from 'react'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import './Header.css'


const Header = ({title, linkText}) => {
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', width: '100%'}}>
     <span className='title'>{title}</span>
     <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between',}}>
        <BoltOutlinedIcon />
        <Badge badgeContent={2} color='error'>
          <span className='link' >{linkText}</span>
        </Badge>
     </div>
</div>
  )
}

export default Header