import { TextField } from '@mui/material';
import React from 'react'

const TextFilter = () => {
  return (
   <TextField
        variant="outlined"
        size="small"
        label={`FILTER`}
      />
  );
}

const ColumnFilter = ({title, type, field}: {title: string, type: string, field: string}) => {
  return (
    <div>
    <div>{title}</div>
    <div><TextFilter /></div>   
    </div>
  )
}

export default ColumnFilter