import { TableItem } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { tableExtraReducers } from "./tableExtraReducers";

interface TableState {
  loading: boolean;
  tableData: TableItem[] | null;
  success: boolean;
  error: string | null;
}

const initialState: TableState = {
  loading: false,
  tableData: null,
  success: false,
  error: null,
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {},
  extraReducers: tableExtraReducers,
});

export type { TableState };
export const {} = tableSlice.actions;
export default tableSlice.reducer;
