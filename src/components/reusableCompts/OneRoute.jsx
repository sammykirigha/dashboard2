import React from 'react'
import Spinner from './spinner/Spinner'

const OneRoute = () => {
  return (
    <div style={{marginTop: '150px', marginLeft: '50px'}}>
        <h2 data-tesid='header-text'>
            Loading your data in a moment.....
        </h2>
        <div style={{marginLeft: '150px'}}>
         <Spinner />
        </div>
    </div>
  )
}

export default OneRoute