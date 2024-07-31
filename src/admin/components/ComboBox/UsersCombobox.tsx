import { getUsers, getUsersWithPermission } from "../../users/actions";
import ComboBox from "../inputs/ComboBox";

const UsersCombobox = ({
  initialValue,
  data,
  set,
  field,
  multiple,
  isTableFilter,
  locations,
  permission,
  property,
}: {
  data: any;
  set: any;
  initialValue?: any;
  field?: string;
  multiple?: boolean;
  isTableFilter?: boolean;
  locations?: string;
  permission?: number;
  property?: string;
}) => {
  return (
    <ComboBox
      src={permission ? () => getUsersWithPermission(permission) : getUsers}
      async={permission ? false : true}
      multiple={multiple}
      isTableFilter={isTableFilter}
      field="name"
      fieldKey="users"
      responseProperty="users"
      label="Usuarios..."
      initialValue={initialValue}
      params={{ locations: locations }}
      customFormat="user"
      set={(newValue: any) =>
        multiple
          ? set({ ...data, [property ?? "users"]: newValue })
          : set({ ...data, [field ?? "user"]: newValue })
      }
    ></ComboBox>
  );
};

export default UsersCombobox;
