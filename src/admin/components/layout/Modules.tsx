import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { sections } from "../../lib/sections";
import { Divider, Tooltip } from "@mui/material";
import styles from "../../styles/app.module.scss";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { hasPermission } from "../../models/user.model";
import { Link } from "react-router-dom";

const Modules = ({ open }: { open: boolean }) => {
  const { user } = useSelector((state: RootState) => state.account);
  return (
    <>
      {sections.map((section) => {
        return (
          <>
            {hasPermission(user?.role, section.permission) && (
              <>
                <Module {...section} open={open} key={section.link} />
                {section?.divider && <Divider />}
              </>
            )}
          </>
        );
      })}
    </>
  );
};

const Module = ({
  name,
  link,
  icon,
  open,
}: {
  name: string;
  link: string;
  icon: any;
  open: boolean;
}) => {
  return (
    <Link to={link} className={styles.menuItem}>
      <Tooltip title={!open && name} placement="right">
        <ListItem disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </Tooltip>
    </Link>
  );
};

export default Modules;
