import { configureStore } from "@reduxjs/toolkit";
import { tableReducer } from "@/features";

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {table: TableState}
export type AppDispatch = typeof store.dispatch;
