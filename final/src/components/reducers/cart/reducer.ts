import { ShopAction, ShopActionType } from "./actions";
import { ShopState } from "./state";

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.UPDATE_WISH:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ShopActionType.ADD_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ShopActionType.REMOVE_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ShopActionType.ADD:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
      };

    case ShopActionType.UPDATE:
      return {
        ...state,
        total: action.payload,
      };
    default:
      return state;
  }
};