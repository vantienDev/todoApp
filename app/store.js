import { configureStore } from "@reduxjs/toolkit";
import firebaseFeatures from "../features/firebaseFeatures";
export const store = configureStore({
  reducer: {
    firebaseActions: firebaseFeatures,
  },
});
