import { useContext } from "react";
import { ShopContext, } from "../contexts/ShopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";

export const Wishlist = () => {
  const { wishlist } = useContext(ShopContext);

  return (
    <>
      <Title>Your wishlist</Title>
      <ProductsWrapper>
        {wishlist.map((productItem: Product, index) => (
          <ProductCard {...productItem} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};