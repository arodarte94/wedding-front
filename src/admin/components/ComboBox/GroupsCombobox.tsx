import { getGroups } from "../../groups/actions";
import ComboBox from "../inputs/ComboBox";

const GroupsCombobox = ({
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
  return (
    <ComboBox
      src={getGroups}
      async
      required
      multiple={multiple}
      isTableFilter={isTableFilter}
      field="name"
      fieldKey="group"
      responseProperty="groups"
      label="Grupo..."
      key={"groupsComboBox"}
      initialValue={initialValue}
      set={(newValue: any) =>
        set(isTableFilter ? { groups: newValue } : { ...data, group: newValue })
      }
    ></ComboBox>
  );
};

export default GroupsCombobox;
