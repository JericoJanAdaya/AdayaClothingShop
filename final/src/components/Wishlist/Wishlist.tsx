import { useContext } from "react";
import { ShopContext, } from "../contexts/ShopContext";
import { Product } from "../../models";
import { ProductCard } from "../ProductCard";
import { ProductsWrapper, Title } from "./Wishlist.styled";

export const Wishlist = () => {
  const { wishlist, totalWishlist } = useContext(ShopContext);

  function getWishlistTotal() {
    var wishlistTotal = 0;
    wishlist.forEach((product) => (wishlistTotal += product.price));
    return wishlistTotal;
  }

  return (
    <>
      <Title>Your wishlist total cost is {getWishlistTotal()}.00$</Title>
      <ProductsWrapper>
        {wishlist.map((productItem: Product, index) => (
          <ProductCard {...productItem} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};