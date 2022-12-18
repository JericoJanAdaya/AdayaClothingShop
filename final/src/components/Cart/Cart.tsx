import { useContext } from "react";
import { ShopContext, } from "../contexts/ShopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Cart.styled";

export const Cart = () => {
  const { products, total } = useContext(ShopContext);
  return (
    <>
      <Title>Your cart total cost is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((productItem: Product, index) => (
          <ProductCard {...productItem} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};