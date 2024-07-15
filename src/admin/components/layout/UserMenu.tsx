import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import menuStyles from "../../styles/menu.module.scss";
import { logout } from "../../auth/actions";
import { Logout, Settings } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { logout as clearUser } from "../../auth/slice";
import { useState } from "react";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const accountState = useSelector((state: RootState) => state.account);
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser = async () => {
    await logout();
    dispatcher(clearUser());
    global?.window?.localStorage.setItem("user", "");
    global?.window?.localStorage.setItem("token", "");
    global?.window?.localStorage.setItem("role", "");
    navigate("/");
  };

  return (
    <div className={menuStyles.userMenu}>
      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={accountState.user?.name}
            src={
              accountState.user?.image
                ? ENV.imagePath + accountState.user.image
                : "/static/images/avatar/2.jpg"
            }
            key={"userImage" + accountState.user?.id}
          />
        </IconButton>
        <Menu
          anchorEl={anchorElUser}
          id="account-menu"
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            <Link to={"/profile"}>
              <Typography textAlign="center">Mi cuenta</Typography>
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => logoutUser()}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Typography textAlign="center">Cerrar sesión</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </div>
  );
};

export default UserMenu;
