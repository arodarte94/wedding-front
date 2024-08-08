import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../../styles/tables.module.scss";
import { headerFilterProps } from "../ComboBox/HeaderFilterProps";
import OptionFormatter from "../ComboBox/OptionFormatter";

interface ComboBoxProps {
  src: any;
  field: string;
  fieldKey: string;
  responseProperty: string;
  set: any;
  groupBy?: any;
  label?: string;
  initialValue?: any;
  async?: boolean;
  multiple?: boolean;
  required?: boolean;
  params?: any;
  isTableFilter?: boolean;
  simple?: boolean;
  customFormat?: string;
  disabled?: boolean;
}

const ComboBox = ({
  src,
  field,
  fieldKey,
  responseProperty,
  set,
  groupBy,
  label,
  initialValue,
  async,
  multiple,
  required,
  params,
  isTableFilter,
  simple,
  customFormat,
  disabled,
}: ComboBoxProps) => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState(initialValue ? initialValue : null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const fetchOptions = async () => {
    setIsLoading(true);
    const response = await src(1, 100, "nameDesc", {
      ...params,
      [field]: query,
    });
    setIsLoading(false);
    if (!response) return;

    const responseData =
      response.data[responseProperty]?.data ?? response.data[responseProperty];
    setOptions(async ? [...responseData] : responseData);
  };

  useEffect(() => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      fetchOptions();
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
    if (newValue) {
      if (multiple) {
        if (isTableFilter || simple) {
          set(newValue.map((i) => i.id).join(","));
        } else {
          set(newValue);
        }
      } else {
        set(newValue?.id, details);
      }

      setValue({ [fieldKey]: newValue?.id, name: details?.option.name });
    } else {
      setValue(null);
      set(null);
    }
  };

  const customProps = isTableFilter ? headerFilterProps : {};

  return (
    <Autocomplete
      limitTags={isTableFilter ? 1 : 20}
      size={isTableFilter ? "small" : "medium"}
      className={isTableFilter ? styles.headerComboBox : ""}
      multiple={multiple}
      options={options}
      getOptionLabel={(option) => option[field]}
      onChange={handleSelect}
      defaultValue={value}
      disabled={disabled}
      isOptionEqualToValue={(option, value) => {
        return option.id === value.id;
      }}
      {...customProps}
      groupBy={groupBy ? (option) => option[groupBy] : undefined}
      loading={isLoading}
      loadingText={
        <CircularProgress
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            width: "100%",
          }}
        />
      }
      renderInput={(params) => (
        <TextField
          required={required}
          variant={isTableFilter ? "filled" : "outlined"}
          {...params}
          label={label ?? "Seleccionar..."}
          onChange={async ? (e) => search(e.target.value) : undefined}
        />
      )}
      renderOption={(props, option, { selected }) => (
        <OptionFormatter
          props={props}
          option={option}
          selected={selected}
          field={field}
          customFormat={customFormat}
        />
      )}
    />
  );
};

export default ComboBox;
