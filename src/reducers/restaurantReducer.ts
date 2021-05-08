/**
 * In case redux shows
 */

import { RestaurantContextTypes } from "../store/restaurant-context";
import { CartProduct } from "../models/products.models";

type ActionType =
  | { type: "Add to cart"; payload: CartProduct }
  | { type: "Remove from cart"; payload: CartProduct["uid"] }
  | { type: "Client has ordered" };

export const restaurantReducer = (
  state: RestaurantContextTypes,
  action: ActionType
) => {
  switch (action.type) {
    case "Add to cart":
      return {
        ...state,
        cart: state.cart.concat(action.payload),
      };
    case "Remove from cart":
      return {
        ...state,
        cart: state.cart.filter((product) => {
          return product.uid !== action.payload;
        }),
      };
    case "Client has ordered":
      return {
        ...state,
        hasOrdered: true,
      };

    default:
      return state;
  }
};
