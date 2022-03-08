import React, { useState }  from 'react'
import Select from 'react-select'

const optionArray = [
  {label: 'This month', value: 1},
  {label: 'Next month', value: 2},
  {label: 'Last month', value: 3},
]

const DropDown = () => {
  return (
    <div>
      <Select  placeholder="select month" className='card-content-span2' options={optionArray} />
     </div>
  )
}

export default DropDown