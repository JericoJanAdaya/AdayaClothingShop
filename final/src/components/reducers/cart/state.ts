import { Product } from "../../../models";

type Shop = {
    products: Product[];
    wishlist: Product[];
};

export const ShopState: Shop = {
    products: [],
    wishlist: [],
};
