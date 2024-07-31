import { Autocomplete, TextField } from "@mui/material";
import { headerFilterProps } from "./HeaderFilterProps";
import styles from "../../styles/tables.module.scss";
import OptionFormatter from "./OptionFormatter";

const IsConfirmedCombobox = ({
  set,
  isTableFilter,
}: {
  data: any;
  set: any;
  initialValue?: any;
  detailed?: boolean;
  multiple?: boolean;
  isTableFilter?: boolean;
}) => {
  const customProps = isTableFilter ? headerFilterProps : {};

  const handleSelect = (e: any, val: any) => {
    if (val) {
      set({
        [val.id === 2 ? "notConfirmed" : "confirmed"]: 1,
        [val.id === 2 ? "confirmed" : "notConfirmed"]: null,
      });
    } else {
      set({ confirmed: null, notConfirmed: null });
    }
  };

  return (
    <Autocomplete
      size={isTableFilter ? "small" : "medium"}
      limitTags={isTableFilter ? 1 : 20}
      className={isTableFilter ? styles.headerComboBox : ""}
      options={[
        { id: 1, name: "Inventariable" },
        { id: 2, name: "No inventariable" },
      ]}
      getOptionLabel={(option) => option.name}
      {...customProps}
      onChange={handleSelect}
      renderInput={(params) => (
        <TextField
          label="Confirmado"
          {...params}
          variant={isTableFilter ? "filled" : "outlined"}
        />
      )}
      renderOption={(props, option, { selected }) => (
        <OptionFormatter
          props={props}
          option={option}
          selected={selected}
          field={"name"}
        />
      )}
    />
  );
};

export default IsConfirmedCombobox;
