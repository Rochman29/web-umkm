"use client";

import { store } from "./store";
import { Provider, useDispatch } from "react-redux";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
