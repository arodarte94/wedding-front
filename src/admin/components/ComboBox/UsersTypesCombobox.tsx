import { getUsersTypes } from '../../users/actions';
import ComboBox from '../inputs/ComboBox';

const UsersTypesCombobox = ({
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
      src={getUsersTypes}
      required
      multiple={multiple}
      isTableFilter={isTableFilter}
      field="name"
      fieldKey="type"
      responseProperty="types"
      label="Tipo..."
      key={'usersTypesCombobox'}
      initialValue={initialValue}
      set={(newValue: any) =>
        set(
          isTableFilter
            ? { types: newValue }
            : { ...data, type: newValue },
        )
      }
    ></ComboBox>
  );
};

export default UsersTypesCombobox;
