import { createSlice } from "@reduxjs/toolkit";

interface appState {
  isLoading: boolean;
  isPageLoading: boolean;
  message: {
    content: string | null;
    type: "success" | "error" | null;
  };
  currentModule: string;
  isMenuOpen: boolean;
  unauthorizedReason: string | null;
}

const initialState: appState = {
  isLoading: false,
  isPageLoading: false,
  message: {
    content: null,
    type: null,
  },
  isMenuOpen: false,
  currentModule: "Dashboard",
  unauthorizedReason: null,
};

const handleIsLoading = (state: any, action: { payload: boolean }) => {
  state.isLoading = action.payload;
};

const handleIsPageLoading = (state: any, action: { payload: boolean }) => {
  state.isPageLoading = action.payload;
};

const handleShowMessage = (state: any, action: any) => {
  state.isLoading = false;
  state.message.content = action.payload;
  state.message.type = "success";
};

const handleShowErrorMessage = (state: any, action: any) => {
  state.isLoading = false;
  state.message.content = action.payload;
  state.message.type = "error";
};

const handleCloseMessage = (state: any) => {
  state.message = { content: null, type: null };
};

const handleSetCurrentModule = (state: any, action: any) => {
  state.currentModule = action.payload;
};

const handleToggleMenu = (state: any) => {
  state.isMenuOpen = !state.isMenuOpen;
};

const handleCloseMenu = (state: any) => {
  state.isMenuOpen = false;
};

const handleSetUnauthorized = (state: any, action: any) => {
  state.unauthorizedReason = action.payload;
};

const handleResetUnauthorized = (state: any) => {
  state.unauthorizedReason = null;
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading: handleIsLoading,
    setIsPageLoading: handleIsPageLoading,
    showMessage: handleShowMessage,
    setCurrentModule: handleSetCurrentModule,
    showErrorMessage: handleShowErrorMessage,
    closeMessage: handleCloseMessage,
    toggleMenu: handleToggleMenu,
    closeMenu: handleCloseMenu,
    setUnauthorized: handleSetUnauthorized,
    resetUnauthorized: handleResetUnauthorized,
  },
});

export const {
  setIsLoading,
  setIsPageLoading,
  showMessage,
  showErrorMessage,
  closeMessage,
  setCurrentModule,
  toggleMenu,
  closeMenu,
  setUnauthorized,
  resetUnauthorized,
} = appSlice.actions;
export default appSlice.reducer;
