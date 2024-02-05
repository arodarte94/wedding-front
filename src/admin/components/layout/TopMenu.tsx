import { IconButton, Toolbar, Typography, styled } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import styles from "../../styles/app.module.scss";
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const TopMenu = ({open, setOpen}) => {

    interface AppBarProps extends MuiAppBarProps {
      open?: boolean;
    }

    const drawerWidth = 220;
    const appState = useSelector((state: RootState) => state.app);

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== "open",
      })<AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }));
      
  return (
    <AppBar position="fixed" open={open} className={styles.topMenu}>
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(!open)}
        edge="start"
        sx={{
          marginRight: 5,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" fontWeight={600} noWrap component="div">
       {appState.currentModule}
      </Typography>
      <UserMenu />
    </Toolbar>
  </AppBar>
  )
}

export default TopMenu