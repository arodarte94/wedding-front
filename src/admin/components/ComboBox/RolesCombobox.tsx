import { getRoles } from "../../roles/actions";
import ComboBox from "../inputs/ComboBox";

const RolesCombobox = ({
  set,
  initialValue,
  data,
  multiple,
  isTableFilter,
}: {
  set: any;
  initialValue?: any;
  data?: any;
  multiple?: boolean;
  isTableFilter?: boolean;
}) => {
  const setRole = (newValue: any) => {
    if (isTableFilter) {
      set({ role: newValue });
    } else {
      data ? set({ ...data, role: newValue }) : set(newValue);
    }
  };
  return (
    <ComboBox
      src={getRoles}
      async
      required
      multiple={multiple}
      isTableFilter={isTableFilter}
      field="name"
      fieldKey="role"
      responseProperty="roles"
      label="Rol"
      initialValue={initialValue}
      set={setRole}
    ></ComboBox>
  );
};

export default RolesCombobox;
