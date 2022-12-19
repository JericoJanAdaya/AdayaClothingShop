import { AddButton, SubTitle, TextContainer, Title, Wrapper, AddButton1,} from './ProductCard.styled';
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs";

import { useState, useEffect, useContext } from 'react';
import { addProduct, removeProduct, add_Wishlist, remove_Wishlist } from "../reducers/cart";
import { Product } from '../../models';
import { ShopContext, ShopDispatchContext } from '../contexts/ShopContext';

export const ProductCard = (productItem: Product) => {
  const {wishlist, products} = useContext(ShopContext);
  const dispatch = useContext(ShopDispatchContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);
  
  useEffect(() => {
    const itemInCart = products.find((item) => item.id === productItem.id);
    const itemInWish = wishlist.find((item) => item.id === productItem.id);

    if (itemInCart && itemInWish) {
      setIsInCart(true);
      setIsInWish(true);
    } else if (itemInCart && !itemInWish) {
      setIsInCart(true);
      setIsInWish(false);
    } else if (!itemInCart && itemInWish) {
      setIsInCart(false);
      setIsInWish(true);
    } else {
      setIsInCart(false);
      setIsInWish(false);
    }

  }, [products, wishlist, productItem.id]);
  
  const handleCartRemove = (productItem: Product) => {
    dispatch(removeProduct(products.filter((item) => item.id !== productItem.id)));
  }

  const handleCartAdd = (productItem: Product) => {
    dispatch(addProduct([...products, productItem]));
  }

  const handleWishRemove = (productItem: Product) => {
    dispatch(remove_Wishlist(wishlist.filter((item) => item.id !== productItem.id)));
  }

  const handleWishAdd = (productItem: Product) => {
    dispatch(add_Wishlist([...wishlist, productItem]));
  }

  return (
    <Wrapper background={productItem.imageUrl}>
      <AddButton isInCart={isInCart} onClick={() => {isInCart ? handleCartRemove(productItem) : handleCartAdd(productItem)}}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <AddButton1 isInWish={isInWish} onClick={() => {isInWish ? handleWishRemove(productItem) : handleWishAdd(productItem)}}>
        <p>{isInWish? <BsFillBookmarkDashFill/> : <BsFillBookmarkPlusFill/>}</p>
      </AddButton1>
      <TextContainer>
        <Title>{productItem.name}</Title>
        <SubTitle>{productItem.price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};