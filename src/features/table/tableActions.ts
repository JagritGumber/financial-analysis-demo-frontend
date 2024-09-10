import { getTableData } from "@/server/api";
import { TableItem } from "@/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTable = createAsyncThunk(
  "table/fetchTable",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await getTableData();

      if (!Array.isArray(res)) {
        return rejectWithValue(
          "message" in res ? res.message : "Something went wrong"
        );
      }

      return fulfillWithValue(res as TableItem[]);
    } catch (error) {
      console.error(error);
      return rejectWithValue(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  }
);

export { fetchTable };
