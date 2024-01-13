import { User } from '../models/user.model';
import { createSlice } from '@reduxjs/toolkit';
import { initialPaginationState, paginationData, setDataReducer, setPageReducer, sortTableReducer } from '../lib/paginator';

interface UsersModuleState extends paginationData {
  items: User[] | null;
}

const initialState : UsersModuleState = {
  items: [],
  ...initialPaginationState
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setData: setDataReducer,
    setPage: setPageReducer,
    sortTable: sortTableReducer
  },
});

export const { setData, setPage, sortTable } = usersSlice.actions;
export default usersSlice.reducer;