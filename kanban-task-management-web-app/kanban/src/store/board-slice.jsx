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
  },
});

export const boardActions = boardSlice.actions;

export default boardSlice;
