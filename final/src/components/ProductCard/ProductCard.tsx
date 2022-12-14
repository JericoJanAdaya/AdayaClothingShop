import { AddButton, SubTitle,TextContainer,Title,Wrapper,AddButton1,} from './ProductCard.styled';
import { BsFillBookmarkPlusFill, BsFillBookmarkDashFill } from "react-icons/bs";

import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { ShopContext} from '../contexts/ShopContext';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {products, addToCart, removeItem} = useContext(ShopContext);
  const [isInCart, setIsInCart] = useState(false);
  const [isInWish, setIsInWish] = useState(false);
  
  useEffect(() => {
    const itemInCart = products.find((productItem: { name: string; }) => productItem.name === name);

    if (itemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

  }, [products, name]);

  useEffect(() => {
    const itemInWish = products.find((productItem: { name: string; }) => productItem.name === name);
    
    if (itemInWish) {
      setIsInWish(true);
    } else {
      setIsInWish(false);
    }

  }, [products, name]);
  
  const handleCartClick = () => {
    const productItem = {name, imageUrl, price};
    if(isInCart){
      removeItem(productItem);
      setIsInCart(false);
    } else{
      addToCart(productItem);
      setIsInCart(true);
    }
  }

  const handleWishClick = () => {
    const productItem = {name, imageUrl, price};
    if(isInWish){
      removeItem(productItem);
      setIsInWish(false);
    } else{
      addToCart(productItem);
      setIsInWish(true);
    }
  }

  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleCartClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <AddButton1 isInWish={isInWish} onClick={handleWishClick}>
        <p>{isInWish? <BsFillBookmarkDashFill/> : <BsFillBookmarkPlusFill/>}</p>
      </AddButton1>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};