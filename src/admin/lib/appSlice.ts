import { createSlice } from '@reduxjs/toolkit';

interface appState {
  isLoading: boolean;
  message: {
    content: string|null,
    type: 'success' | 'error' | null
  }
}

const initialState : appState = {
  isLoading: false,
  message : {
    content: null,
    type: null
  }
};

const handleIsLoading = (state: any, action: any) => {
  state.isLoading = action.payload;
}

const handleShowMessage = (state: any, action: any) => {
  state.isLoading = false;
  state.message.content = action.payload;
  state.message.type = 'success';
}

const handleShowErrorMessage = (state: any, action: any) => {
  state.isLoading = false;
  state.message.content = action.payload;
  state.message.type = 'error';
}

const handleCloseMessage = (state: any) => {
  state.message = { content: null, type: null};
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: handleIsLoading,
    showMessage: handleShowMessage,
    showErrorMessage: handleShowErrorMessage,
    closeMessage: handleCloseMessage
  },
});

export const { setIsLoading, showMessage, showErrorMessage, closeMessage } = appSlice.actions;
export default appSlice.reducer;