import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import Modules from "./Modules";
import {
  Alert,
  Grid,
  Snackbar,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import styles from "../../styles/app.module.scss";
import menuStyles from "../../styles/menu.module.scss";
import axiosInstance from "../../lib/axiosInstance";
import {
  closeMessage,
  resetUnauthorized,
  setCurrentModule,
  setIsLoading,
  setUnauthorized,
  showErrorMessage,
  showMessage,
  toggleMenu,
} from "../../lib/appSlice";
import { useNavigate } from "react-router-dom";
import TopMenu from "./TopMenu";
import { logout } from "../../auth/slice";
import { sections } from "../../lib/sections";
import { Drawer, DrawerHeader } from "./Drawer";
import { themeConfig } from "../../lib/themeConfig";
import MenuIcon from "@mui/icons-material/Menu";

export default function AppLayout({
  children,
  noPadding,
}: {
  children: React.ReactNode;
  noPadding?: boolean;
}) {
  const accountState = useSelector((state: RootState) => state.account);
  const appState = useSelector((state: RootState) => state.app);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const dispatcher = useDispatch();
  useEffect(() => {
    if (!accountState.user) navigate("/");

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      (response) => {
        if (response?.status === 200 && response.data.message)
          dispatcher(showMessage(response.data.message));

        dispatcher(setIsLoading(false));
        return response;
      },
      (error) => {
        if (error.response) {
          if (error.response.status === 400) {
            dispatcher(showErrorMessage(error.response.data.message));
            return error;
          } else if (
            error.response.status === 419 ||
            error.response.status === 401
          ) {
            global?.window?.localStorage.removeItem("user");
            dispatcher(logout());
            navigate("/");
          } else if (error.response.status === 403) {
            dispatcher(setUnauthorized(error.response.data.message));
          } else {
            dispatcher(showErrorMessage(error.response.data.message));
          }
          dispatcher(setIsLoading(false));
        }
      },
    );
  }, []);

  useEffect(() => {
    dispatcher(setUnauthorized(null));
    dispatcher(showErrorMessage(null));
  }, [appState.currentModule]);

  const url = new URL(window.location.href);
  const pathSegments = url.pathname
    .split("/")
    .filter((segment) => segment !== "");
  const moduleName = pathSegments.length > 0 ? pathSegments[0] : null;
  const currentModule = sections.find((i) => i.link.includes(moduleName));
  document.title = currentModule?.name ?? "Dashboard";
  dispatcher(setCurrentModule(currentModule?.name ?? "Dashboard"));

  return (
    <ThemeProvider theme={themeConfig}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopMenu
          open={appState.isMenuOpen}
          setOpen={() => dispatcher(toggleMenu())}
        ></TopMenu>
        <Drawer
          variant="permanent"
          open={appState.isMenuOpen}
          className={menuStyles.leftMenu}
          style={{
            visibility:
              !isDesktop && !appState.isMenuOpen ? "hidden" : "visible",
          }}
        >
          <DrawerHeader className={menuStyles.menuHeader}>
            {appState.isMenuOpen && <h3>SISTEMA TIPI</h3>}
            <IconButton onClick={() => dispatcher(toggleMenu())}>
              {appState.isMenuOpen ? (
                <ChevronLeftIcon />
              ) : (
                <MenuIcon className={menuStyles.menuToggle} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {!accountState.password_change && (
              <Modules open={appState.isMenuOpen} />
            )}
          </List>
        </Drawer>
        <Grid
          container
          spacing={2}
          className={[
            styles.mainContent,
            noPadding ? styles.noPadding : "",
          ].join(" ")}
        >
          <Grid xs={12}>
            {appState.unauthorizedReason && (
              <Alert
                variant="outlined"
                severity="error"
                onClose={() => {
                  dispatcher(resetUnauthorized());
                }}
                sx={{ margin: 1 }}
              >
                {appState.unauthorizedReason}
              </Alert>
            )}
            {children}
          </Grid>
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
    </ThemeProvider>
  );
}
