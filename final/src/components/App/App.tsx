import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Wishlist } from "../Wishlist";
import { Products } from "../Products";
import { ShopContext } from "../contexts/ShopContext";
import { useReducer } from "react";
import { addProduct, initialState, removeProduct, shopReducer, updateTotal, remove_Wishlist, add_Wishlist } from "../reducers/cart";
import { Product } from "../../models";

export const App = () => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const updatePrice = (products: [] = []) => {
    let totalCost = 0;
    products.forEach((productItem: { price: number; quantity: number;}) => (totalCost += productItem.price * productItem.quantity));

    dispatch(updateTotal(totalCost));
  };

  const removeItem = (productItem: Product) => {
    const updatedCart = state.products.filter(
      (currentProduct: Product) => currentProduct.name !== productItem.name
    );
    updatePrice(updatedCart);

    dispatch(removeProduct(updatedCart));
  };

  const addToCart = (productItem: Product) => {
    const updatedCart = state.products.concat(productItem);
    updatePrice(updatedCart);

    dispatch(addProduct(updatedCart));
  };  

  const removeWishlist = (productItem: Product) => {
    const updatedWishlist = state.wishlist.filter(
      (currentProduct: Product) => currentProduct.name !== productItem.name
    );

    dispatch(remove_Wishlist(updatedWishlist));
  };

  const addWishlist = (productItem: Product) => {
    const updatedWishlist = state.wishlist.concat(productItem);

    dispatch(add_Wishlist(updatedWishlist));
  };
  
  const value = {
    total: state.total,    
    wishlist: state.wishlist,
    products: state.products,
    addToCart,
    removeItem,
    addWishlist,
    removeWishlist
  }
  return (
    <ShopContext.Provider value={value}>
      <Wrapper>
        <TitleWrapper>
          <h1>Clothing Shop Starter Project</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wishlist">Wishlist</Link>
        </LinksWrapper>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Wrapper>
    </ShopContext.Provider>
  );
};