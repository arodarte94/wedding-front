import { createSlice } from '@reduxjs/toolkit';
import { initialPaginationState, paginationData, setDataReducer, setPageReducer, sortTableReducer } from '../lib/paginator';
import { Role } from '../models/role.model';

interface RolesModuleState extends paginationData {
  items: Role[] | null;
}

const initialState : RolesModuleState = {
  items: [],
  ...initialPaginationState
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    setData: setDataReducer,
    setPage: setPageReducer,
    sortTable: sortTableReducer
  },
});

export const { setData, setPage, sortTable } = rolesSlice.actions;
export default rolesSlice.reducer;