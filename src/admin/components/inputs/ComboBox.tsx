import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface ComboBoxProps {
  src: any;
  field: string;
  fieldKey: string;
  responseProperty: string;
  set: any;
  label?: string;
  initialValue?: any;
  async?: boolean;
  multiple?: boolean;
  required?: boolean;
}

const ComboBox = ({
  src,
  field,
  fieldKey,
  responseProperty,
  set,
  label,
  initialValue,
  async,
  multiple,
  required,
}: ComboBoxProps) => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(initialValue ? initialValue : null);

  const fetchOptions = async () => {
    const response = await src(1, 100, "nameDesc", { [field]: query });
    setOptions(
      async
        ? [...response.data[responseProperty].data]
        : response.data[responseProperty],
    );
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (query) fetchOptions();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const search = (term: string) => {
    setOptions([]);
    setQuery(term);
  };

  const handleSelect = (
    e: any,
    newValue: any,
    reason: string,
    details?: string,
  ) => {
    console.log(newValue);
    if (newValue) {
      set(multiple ? newValue : newValue?.id);
      setValue({ [fieldKey]: newValue?.id, name: details?.option.name });
    } else {
      setValue(null);
      set(null);
    }
  };

  return (
    <Autocomplete
      multiple={multiple}
      options={options}
      getOptionLabel={(option) => option[field]}
      onChange={handleSelect}
      defaultValue={value}
      renderInput={(params) => (
        <TextField
          required={required}
          variant="filled"
          {...params}
          label={label ?? "Seleccionar..."}
          onChange={async ? (e) => search(e.target.value) : undefined}
        />
      )}
    />
  );
};

export default ComboBox;
