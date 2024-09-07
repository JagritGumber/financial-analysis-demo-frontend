import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { TableState } from "./tableSlice";
import { fetchTable } from "./tableActions";

const tableExtraReducers = (builder: ActionReducerMapBuilder<TableState>) => {
  builder.addCase(fetchTable.pending, (state) => {
    state.loading = true;
    state.success = false;
    state.error = null;
    state.tableData = null;
  });
  builder.addCase(fetchTable.fulfilled, (state, action) => {
    state.loading = false;
    state.success = true;
    state.error = null;
    state.tableData = action.payload;
  });
  builder.addCase(fetchTable.rejected, (state, action) => {
    state.loading = false;
    state.success = false;
    state.error = action.error.message || "Something went wrong";
    state.tableData = null;
  });
};

export { tableExtraReducers };
