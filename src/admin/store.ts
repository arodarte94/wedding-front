import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import appSlice from './lib/appSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    account: authSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;