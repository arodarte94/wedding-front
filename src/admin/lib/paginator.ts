import { capitalize } from "@mui/material";

export interface paginationData {
  currentPage: number;
  itemsPerPage: number,
  elements: number;
  sortKey: string | null;
  isLoading: boolean;
  headers: any;
}

export const initialPaginationState = {
  currentPage: 1,
  itemsPerPage: 10,
  elements: 0,
  sortKey: null,
  isLoading: true,
  headers: []
}

export const paginator = async (
  getData: any, 
  reducer: any, 
  dispatcher: any, 
  modelName: string, 
  page : number, 
  pageLength : number = 10,
  sortKey: string | null,
  headers?: any
  ) => {
    
    try {
      const response = await getData(page, pageLength, sortKey, headers);
      dispatcher(reducer( response.data[modelName] ));
    } catch (error) {
      console.error('Error fetching:', error);
    }
  };

export const setDataReducer = (state: any, action: any) => {
      state.items = action.payload.data;
      state.elements = action.payload.total;
      state.isLoading = false;
}

export const setPageReducer = (state: any, action: any) => {
      state.currentPage = action.payload.page;
      state.itemsPerPage = action.payload.itemsPerPage;
      state.isLoading = true;
}

export const sortTableReducer = (state: any, action: any) => {
      
  state.currentPage = 1;
      state.isLoading = true;
      
      if(action.payload.column)
        state.sortKey = action.payload.column + capitalize(action.payload.sort);

      else
        state.sortKey = null;
}