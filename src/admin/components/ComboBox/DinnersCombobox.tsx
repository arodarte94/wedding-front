import { getDinners } from "../../users/actions";
import ComboBox from "../inputs/ComboBox";

const DinnersCombobox = ({
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
      src={getDinners}
      required
      multiple={multiple}
      isTableFilter={isTableFilter}
      field="name"
      fieldKey="dinner"
      responseProperty="dinners"
      label="Cena..."
      key={"dinnersCombobox"}
      initialValue={initialValue}
      set={(newValue: any) =>
        set(
          isTableFilter ? { dinners: newValue } : { ...data, dinner: newValue },
        )
      }
    ></ComboBox>
  );
};

export default DinnersCombobox;
