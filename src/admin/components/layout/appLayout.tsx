
import * as React from "react";
import { styled, Theme, CSSObject, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Modules from "./Modules";
import {
  Alert,
  Backdrop,
  CircularProgress,
  Grid,
  Snackbar,
  useMediaQuery,
} from "@mui/material";
import styles from "../../styles/app.module.scss";
import UserMenu from "./UserMenu";
import axiosInstance from "../../lib/axiosInstance";
import {
  closeMessage,
  showErrorMessage,
  showMessage,
} from "../../lib/appSlice";
import { useNavigate } from "react-router-dom";
import { logout } from "../../auth/slice";

const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

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

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);

  const accountState = useSelector((state: RootState) => state.account);
  const appState = useSelector((state: RootState) => state.app);
  const navigate = useNavigate()
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const dispatcher = useDispatch();

  useEffect(() => {
    if (!accountState.user) navigate("/auth");

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      (response) => {
        if (response.status === 200)
          dispatcher(showMessage(response.data.message));

        return response;
      },
      (error) => {
        if (error.response && error.response.status === 400) {
          dispatcher(showErrorMessage(error.response.data.message));
          return error;
        }

        else if(error.response.status === 419 || error.response.status === 401 ) {
          global?.window?.localStorage.removeItem('user');
          dispatcher(logout());
          navigate("/admin");
        }
        
      }
    );
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
          <Typography variant="h6" noWrap component="div">
            La bodita de los morritos
          </Typography>
          <UserMenu />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        className={styles.leftMenu}
        style={{
          visibility: !isDesktop && !open ? "hidden" : "visible",
        }}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Modules open={open} />
        </List>
      </Drawer>
      <Grid container spacing={2} className={styles.mainContent}>
        <Backdrop
          className={styles.loading}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={appState.isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Grid xs={12}>{children}</Grid>
      </Grid>
      <Snackbar
        open={appState.message.content != null}
        autoHideDuration={6000}
        onClose={() => dispatcher(closeMessage())}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => dispatcher(closeMessage())}
          severity={appState.message.type || "success"}
          sx={{ width: "100%" }}
        >
          {appState.message.content}
        </Alert>
      </Snackbar>
    </Box>
  );
}
