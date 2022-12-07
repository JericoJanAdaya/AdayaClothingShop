import { Products } from '../../Products';
import { ShopAction, ShopActionType } from './actions';

import { ShopState } from './state';

export const shopReducer = (state: ShopState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.ADD:
      return {
        ...state,
        products: action.payload,
        total: action.payload,
      };

    case ShopActionType.REMOVE:
      return {
        ...state,
        products: action.payload,
        total: action.payload,
      };

    default:
      return state;
  }
};