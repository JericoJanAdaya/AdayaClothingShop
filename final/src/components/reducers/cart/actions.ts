import { Product } from "../../../models/Product";

  export enum ShopActionType {
    ADD = 'addProduct',
    REMOVE = 'removeProduct',
    UPDATE = 'updateTotal',
  }
  
  export type ShopAction = {
    type: ShopActionType;
    payload: any;
  };
  
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