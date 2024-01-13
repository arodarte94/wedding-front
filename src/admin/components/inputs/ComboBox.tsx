import { Autocomplete, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

const ComboBox = ({src, labelKey, idKey, fieldKey, data, searchTerm, set, text, responseProperty, async}) => {

  const [query, setQuery] = useState('')
  const [options, setOptions] = useState([]);
  const [value, setNewValue] = useState<{id: number, name: string} | null>(null);

  const fetchOptions = async () => {
    const response = await src(1, 100, 'nameDesc', {[searchTerm]: query});
    setOptions([...response.data[responseProperty].data]);
    setNewValue({id: data[fieldKey], name: text});
  }

  useEffect( () => {
      fetchOptions();
  }, [])
  
  useEffect(() => {

    let timer = setTimeout(() => {
        if(query)
        fetchOptions();

    }, 500)

    return () => clearTimeout(timer)

}, [query])

  const search = (term: string) => {
      setOptions([]);
      setQuery(term);
  }

  const handleSelect = (e: any, newValue: any, reason: string, details?: string) => {;
    if(newValue) {
      set({...data, [fieldKey]: newValue.id})
      setNewValue({id: newValue.id, name: details.option.name })
    }

    else {
      setNewValue(null);
      set({...data, [fieldKey]: null})
    }
  }

  return (
    <Autocomplete
        options={options}
        getOptionLabel={(option) => option[labelKey]}
        getOptionKey={(option) => option[idKey]}
        onChange={handleSelect}
        value={value}
        renderInput={(params) => <TextField variant="filled" {...params} label="Select..."
        onChange={ async ? e => search(e.target.value) : undefined} 
        />}
    />
  )
}

export default ComboBox