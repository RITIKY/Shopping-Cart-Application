const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      let item = state.items.filter(
        (item) => item.id === action.payload.current.id
      );
      let newQty = parseInt(action.payload.quantityvalue);

      if (item.length !== 0) {
        item[0].cartQuantity += newQty;
        return state;
      } else {
        const newItem = { ...action.payload.current, cartQuantity: newQty };
        return { ...state, items: [...state.items, newItem] };
      }
    },
    remove(state, action) { 
      const filteredItems = state.items.filter((item) => item.id !== action.payload);
      state.items = filteredItems
      return state;
    },
    clearCart(state) {
      state.items = [];
      return state;
    },
    increseCart(state, action) {
      const item = state.items.filter((item) => item.id === action.payload.id);
      item[0].cartQuantity += 1;
      return state;
    },
    decreaseCart(state, action) {
      const item = state.items.filter((item) => item.id === action.payload.id);
      item[0].cartQuantity -= 1;
      return state;
    },
  },
});

export const { add, remove, clearCart, increseCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
