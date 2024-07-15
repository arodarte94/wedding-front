import { Box } from "@mui/material";

const TabContent = (props: any) => {
  const { children, value, index, padding } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <Box sx={{ padding: padding }}>{children}</Box>}
    </div>
  );
};

export default TabContent;
