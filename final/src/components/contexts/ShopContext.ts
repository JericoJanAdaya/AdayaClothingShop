import { createContext, type Dispatch } from "react";
import { ShopAction } from '../reducers/cart';
import { Product } from "../../models";

type Shop = {
    products: Product[];
    wishlist: Product[];
};

export const initialState: Shop = {
    products: [],
    wishlist: [],
};

export const initialDispatch: Dispatch<ShopAction> = () => {};

export const ShopDispatchContext = createContext(initialDispatch);
export const ShopContext = createContext(initialState);