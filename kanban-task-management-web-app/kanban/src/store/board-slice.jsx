import { createSlice } from "@reduxjs/toolkit";

const boardSlice = createSlice({
  name: "board",
  initialState: { columns: [], showAddColumns: false },
  reducers: {
    showFormAddColumns(state) {
      state.showAddColumns = true;
    },
    hideFormAddColumns(state) {
      state.showAddColumns = false;
    },
    addColumns(state, action) {
      const { columns } = action.payload;
      const checkValues = columns.filter(
        (column) => !state.columns.includes(column)
      );
      state.columns = [...state.columns, ...checkValues];
    },
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
