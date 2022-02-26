import React from 'react';
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

const SelectItems = () => {
    const [selected, setSelected] = React.useState(null);

    const handleChange = (selected) => {
        setSelected(selected)
    }
  return (
   <Select 
     value={selected}
     onChange={handleChange}
     options={options}
    />
  )
}

export default SelectItems