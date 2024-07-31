import { TextField } from "@mui/material";
import styles from "../../styles/tables.module.scss";

export const TextFilter = ({ title, set, field, isLoading }) => {
  const filter = (e) => {
    if (e.key === "Enter" && !isLoading) {
      set({ [field]: e.target.value });
    }
  };
  return (
    <TextField
      size="small"
      variant="filled"
      label={title}
      className={styles.filter}
      onKeyDown={(e) => filter(e)}
    />
  );
};

const ColumnFilter = ({
  filter: Component,
  title,
  field,
  set,
  property,
  isLoading,
  label,
}: {
  filter?: any;
  title: string;
  field: string;
  set: any;
  property?: string;
  isLoading?: boolean;
  label?: string;
}) => {
  return (
    <>
      <Component
        title={title}
        field={field}
        set={set}
        isLoading={isLoading}
        isTableFilter
        initialValue={[]}
        data={{}}
        property={property}
        label={label}
        multiple
      />
    </>
  );
};

export default ColumnFilter;
