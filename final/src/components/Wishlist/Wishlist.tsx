import { useContext } from "react";
import { ShopContext, } from "../contexts/ShopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";

export const Wishlist = () => {
  const { products, total } = useContext(ShopContext);
  return (
    <>
      <Title>Your wishlist total cost is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((productItem: Product, index) => (
          <ProductCard {...productItem} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};