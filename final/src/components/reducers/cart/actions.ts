import { Product } from "../../../models/Product";

  export enum ShopActionType {
    ADD_WISHLIST = 'addWishlist',
    REMOVE_WISHLIST = 'removeWishlist',
    ADD = 'addProduct',
    REMOVE = 'removeProduct',
    UPDATE = 'updateTotal',
    UPDATE_WISH = 'updateWish'
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };

  export const updateWish = (totalWishlist: number): ShopAction => ({
    type: ShopActionType.UPDATE_WISH,
    payload: totalWishlist,
  });

  export const add_Wishlist = (wishlist: Product): ShopAction => ({
    type: ShopActionType.ADD_WISHLIST,
    payload: wishlist,
  });

  export const remove_Wishlist = (wishlist: Product): ShopAction => ({
    type: ShopActionType.REMOVE_WISHLIST,
    payload: wishlist,
  });
  
  export const addProduct = (productItem: Product): ShopAction => ({
    type: ShopActionType.ADD,
    payload: productItem,
  });
  
  export const removeProduct = (productItem: Product): ShopAction => ({
    type: ShopActionType.REMOVE,
    payload: productItem,
  });

  export const updateTotal = (total: number): ShopAction => ({
    type: ShopActionType.UPDATE,
    payload: total,
  });