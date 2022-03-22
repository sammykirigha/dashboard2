import { Card } from '@mui/material'
import React from 'react'

const cardStyle = {
	padding: '10px',
    maxHeight: '220px',
    width: '100%'
}

const NewsCard = ({children}) => {
  return (
	  <Card styles={cardStyle}>
		  {children}
	</Card>
  )
}

export default NewsCard