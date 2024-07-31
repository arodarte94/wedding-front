import { getEntrees } from "../../users/actions";
import ComboBox from "../inputs/ComboBox";

const EntreesCombobox = ({
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
      src={getEntrees}
      required
      multiple={multiple}
      isTableFilter={isTableFilter}
      field="name"
      fieldKey="entree"
      responseProperty="entrees"
      label="Entrada..."
      key={"entreesCombobox"}
      initialValue={initialValue}
      set={(newValue: any) =>
        set(
          isTableFilter ? { entrees: newValue } : { ...data, entree: newValue },
        )
      }
    ></ComboBox>
  );
};

export default EntreesCombobox;
