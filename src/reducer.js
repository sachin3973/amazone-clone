export const initialState = {
  basket: [],
  wishlist: [],
  user: null,
};
// Selector it is highly used in prodcuction environment
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// read about this reduce function

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // we check to see if product exists,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // we cloned the basket
      let newBasket = [...state.basket];

      if (index >= 0) {
        // item exists in basket, remove it ...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.id}) as it's not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "REMOVE_FROM_WISHLIST":
      // we check to see if product exists,
      const wishlistIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );

      // we cloned the basket
      let newWishlist = [...state.wishlist];

      if (wishlistIndex >= 0) {
        // item exists in basket, remove it ...
        newWishlist.splice(wishlistIndex, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.id}) as it's not in basket!`
        );
      }

      return {
        ...state,
        wishlist: newWishlist,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
