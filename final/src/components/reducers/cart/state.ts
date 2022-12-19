import { Product } from "../../../models";

export type ShopState = {
    wishlist: Product[],
    products: Product[],
    total: number,    
    addToCart: any,
    removeItem: any,
    addWishlist: any,
    removeWishlist: any
}

export const initialState = {
    wishlist: [],
    products: [],
    total: 0,    
    addToCart: null,
    removeItem: null,
    addWishlist: null,
    removeWishlist: null
}