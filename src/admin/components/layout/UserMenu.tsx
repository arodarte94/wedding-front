'use client'
import React from "react";
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
import styles from "../../styles/app.module.scss";
import { logout } from "../../auth/actions";
import { Logout, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUser } from "../../auth/slice";

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logoutUser = async () => {
    await logout();
    global?.window?.localStorage.setItem('user', '');
    dispatch(resetUser())
    navigate("/admin");
  }

  return (
    <div className={styles.userMenu}>
        <Box sx={{ flexGrow: 0 }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          <Typography textAlign="center">Settings</Typography>
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
