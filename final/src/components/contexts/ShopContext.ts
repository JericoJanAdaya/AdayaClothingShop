import { createContext, type Dispatch } from "react";
import { ShopState, initialState, ShopAction } from '../reducers/cart';


export const initialDispatch: Dispatch<ShopAction> = () => {};

export const ShopDispatchContext = createContext(initialDispatch);
export const ShopContext = createContext<ShopState>(initialState);