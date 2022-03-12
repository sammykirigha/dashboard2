import { Badge } from '@mui/material'
import React from 'react'
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import './Header.css'
import { useLocation, useParams } from 'react-router-dom';


const Header = ({title, linkText}) => {
  const params = useLocation()
  const name = params.pathname.split('/')
  return (
    <div style={{display: 'flex', alignItems:'center', justifyContent: 'space-between', width: '100%'}}>
     <span className='title'>{name[2]? name[2] : title}</span>
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