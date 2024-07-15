import { IconButton, Toolbar, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import menuStyles from "../../styles/menu.module.scss";
import UserMenu from "./UserMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { sections } from "../../lib/sections";

const TopMenu = ({ open, setOpen }) => {
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const appState = useSelector((state: RootState) => state.app);

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>();

  return (
    <AppBar
      position="fixed"
      open={open}
      className={[menuStyles.topMenu, open ? menuStyles.collapsed : ""].join(
        " ",
      )}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen()}
          edge="start"
          sx={{
            marginRight: 5,
          }}
          className={menuStyles.menuToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          fontWeight={600}
          noWrap
          component="div"
          className={menuStyles.title}
        >
          {
            sections.find((section) => section.name === appState.currentModule)
              .icon
          }
          {appState.currentModule}
        </Typography>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default TopMenu;
