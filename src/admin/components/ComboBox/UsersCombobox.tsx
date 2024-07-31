import { getUsers, getUsersWithPermission } from "../../users/actions";
import ComboBox from "../inputs/ComboBox";

const UsersCombobox = ({
  initialValue,
  data,
  set,
  field,
  multiple,
  isTableFilter,
  permission,
  property,
  type,
}: {
  data: any;
  set: any;
  initialValue?: any;
  field?: string;
  multiple?: boolean;
  isTableFilter?: boolean;
  type?: number;
  permission?: number;
  property?: string;
}) => {
  return (
    <ComboBox
      src={getUsers}
      async={permission ? false : true}
      multiple={multiple}
      isTableFilter={isTableFilter}
      field="name"
      fieldKey="users"
      responseProperty="users"
      label="Responsable..."
      initialValue={initialValue}
      params={{ type: type }}
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
