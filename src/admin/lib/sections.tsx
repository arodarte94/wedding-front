import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import { RolePermission } from "../models/permission.model";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const sections = [
  {
    name: "Dashboard",
    link: "/admin",
    order: 1,
    divider: true,
    icon: <DashboardIcon />,
    permission: 0,
  },
  {
    name: "Usuarios",
    link: "/admin/users",
    order: 2,
    icon: <PeopleAltOutlinedIcon />,
    permission: RolePermission.CAN_ACCESS_USERS,
  },
  {
    name: "Grupos",
    link: "/admin/groups",
    order: 3,
    icon: <BadgeOutlinedIcon />,
    permission: RolePermission.CAN_ACCESS_GROUPS,
  },
];
