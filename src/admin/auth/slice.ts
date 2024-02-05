import { Role } from '../models/role.model';
import { User } from '../models/user.model';
import { createSlice } from '@reduxjs/toolkit';

interface AccountState {
  user: User | null;
  role: Role | null;
  exchangeRate: number | null;
}

const storedUserData = global?.window?.localStorage.getItem('user') ?? '';
const storedRoleData = global?.window?.localStorage.getItem('role') ?? '';

const initialState : AccountState = {
  user: typeof storedUserData === 'string' && storedUserData !== ''
   ? JSON.parse(storedUserData) : null,
   role: typeof storedRoleData === 'string' && storedRoleData !== ''
   ? JSON.parse(storedRoleData) : null,
  exchangeRate: null
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role;
      console.log(action.payload);
      state.exchangeRate = action.payload.exchange_rate;
    },
    logout: (state) => {
      state.user = null;
      state.exchangeRate = null;
    },
    setAccount: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loginSuccess, setAccount, logout } = accountSlice.actions;
export default accountSlice.reducer;