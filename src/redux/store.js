import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    cartReducer,
  },
});
store.subscribe(() => {
  localStorage.setItem("checkOutData", JSON.stringify(store.getState()));
});

export { store };

export const useAppSelector = useSelector;
