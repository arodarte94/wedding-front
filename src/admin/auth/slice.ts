import { User } from '../models/user.model';
import { createSlice } from '@reduxjs/toolkit';

interface AccountState {
  user: User | null;
  exchangeRate: number | null;
}

const storedUserData = global?.window?.localStorage.getItem('user') ?? '';

const initialState : AccountState = {
  user: typeof storedUserData === 'string' && storedUserData !== ''
   ? JSON.parse(storedUserData) : null,
  exchangeRate: null
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.exchangeRate = action.payload.exchange_rate;
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { loginSuccess, resetUser } = accountSlice.actions;
export default accountSlice.reducer;