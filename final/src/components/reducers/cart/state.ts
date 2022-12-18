import { Product } from "../../../models";

export type ShopState = {
    wishlist: Product[],
    products: Product[],
    totalWishlist: number,
    total: number,    
    addToCart: any,
    removeItem: any,
    addWishlist: any,
    removeWishlist: any
}

export const initialState = {
    wishlist: [],
    products: [],
    totalWishlist: 0,
    total: 0,    
    addToCart: null,
    removeItem: null,
    addWishlist: null,
    removeWishlist: null
}