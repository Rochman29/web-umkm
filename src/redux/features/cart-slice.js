import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("checkOutData")
  ? JSON.parse(localStorage.getItem("checkOutData")).cartReducer
  : [];

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      return action.payload;
    },
  },
});

export const addToCart = (product, cartArray, dispatch) => {
  const itemIndex = cartArray.findIndex((item) => item.id === product.id);

  if (itemIndex !== -1) {
    const updatedCart = cartArray.map((item, index) =>
      index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(updateCart(updatedCart));
  } else {
    const newCartItem = {
      name: product.name,
      id: product.id,
      imagePatch: product.imagePatch,
      price: product.price,
      quantity: 1,
    };
    const updatedCart = [...cartArray, newCartItem];
    dispatch(updateCart(updatedCart));
  }
};

export const decrementCart = (product, cartArray, dispatch) => {
  const itemIndex = cartArray.findIndex((item) => item.id === product.id);
  const updatedCart = cartArray.map((item, index) =>
    index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item
  );
  if (updatedCart[itemIndex].quantity === 0) {
    updatedCart.splice(itemIndex, 1);
  }
  dispatch(updateCart(updatedCart));
};

export const removeCart = (product, cartArray, dispatch) => {
  const itemIndex = cartArray.findIndex((item) => item.id === product.id);
  const updatedCart = cartArray.map((item) => item);
  updatedCart.splice(itemIndex, 1);
  dispatch(updateCart(updatedCart));
};

export const { updateCart } = cart.actions;
export default cart.reducer;
