import { createContext } from "react";
import { ShopState, initialState } from '../reducers/cart';

export const ShopContext = createContext<ShopState>(initialState);