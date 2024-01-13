import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/slice';
import usersSlice from './users/slice';
import rolesSlice from './roles/slice';
import appSlice from './lib/appSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    account: authSlice,
    users: usersSlice,
    roles: rolesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;