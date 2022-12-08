import { AddButton, SubTitle,TextContainer,Title,Wrapper,} from './ProductCard.styled';

import { useState, useEffect, useContext } from 'react';
import { Product } from '../../models';
import { ShopContext} from '../contexts/ShopContext';

export const ProductCard = ({ name, imageUrl, price }: Product) => {
  const {products, addToCart, removeItem} = useContext(ShopContext);
  const [isInCart, setIsInCart] = useState(false);
  
  useEffect(() => {
    const itemInCart = products.find((productItem: { name: string; }) => productItem.name === name);

    if (itemInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, name]);
  
  const handleClick = () => {
    const productItem = {name, imageUrl, price};
    if(isInCart){
      removeItem(productItem);
      setIsInCart(false);
    } else{
      addToCart(productItem);
      setIsInCart(true);
    }
  }
  return (
    <Wrapper background={imageUrl}>
      <AddButton isInCart={isInCart} onClick={handleClick}>
        <p>{isInCart? "-" : "+"}</p>
      </AddButton>
      <TextContainer>
        <Title>{name}</Title>
        <SubTitle>{price}.00$</SubTitle>
      </TextContainer>
    </Wrapper>
  );
};