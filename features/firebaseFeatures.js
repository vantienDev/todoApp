import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskTitle: "",
  taskList: [],
  newTask: "",
};

export const firebaseSlice = createSlice({
  name: "firebaseActions",
  initialState,

  reducers: {
    setTitleTask: (state, action) => {
      state.taskTitle = action.payload;
    },
    setTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    setNewTask: (state, action) => {
      state.newTask = action.payload;
    },
  },
});

export const { setTitleTask, setTaskList, setNewTask } = firebaseSlice.actions;
export default firebaseSlice.reducer;
