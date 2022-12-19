import { Link, Route, Routes } from "react-router-dom";
import { LinksWrapper, TitleWrapper, Wrapper } from "./App.styled";

import { Cart } from "../Cart";
import { Wishlist } from "../Wishlist";
import { Products } from "../Products";
import { ShopContext, ShopDispatchContext, initialState } from "../contexts/ShopContext";
import { useReducer } from "react";
import { shopReducer } from "../reducers/cart";
import { Product } from "../../models";
import { Checkout } from "../Checkout";

export const App = () => {
  const [shop, dispatch] = useReducer(shopReducer, initialState);  
  return (
    <ShopContext.Provider value={shop}>
      <ShopDispatchContext.Provider value={dispatch}>
        <Wrapper>
          <TitleWrapper>
            <h1>Clothing Shop Starter Project</h1>
          </TitleWrapper>
          <LinksWrapper>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/checkout">Check Out</Link>
          </LinksWrapper>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Wrapper>
      </ShopDispatchContext.Provider>
      
    </ShopContext.Provider>
  );
};