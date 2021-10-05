import { createSelector } from "reselect";

//provider -> connect -> state(store)

/// cart , state { user : userReducer , cart : cartReducer}

// cartReducer -> cart Combine

//humara cart hai
//constant h , state.cart object h
const selectCart = (state) => state.cart;
// selectors ->
// humare cart ke andar ke items
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//  const variable = createSelector([array of selectors ] , ()=> return  would be stored in the variable)
export const selectCartItemsCount = createSelector(
  [selectCartItems], // selector -> selectCartItems
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, CartItem) =>
        accumalatedQuantity + CartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, CartItem) =>
      accumalatedQuantity + CartItem.quantity * cartItems.price,
    0
  )
);
