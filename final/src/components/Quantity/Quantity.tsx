import { useContext, useEffect, useState } from "react";
import { Field, Title, Wrapper } from ".";
import { ShopContext, ShopDispatchContext } from "../contexts";
import { updateCart } from "../reducers/cart";
import { Menu } from "../Menu";

export const Quantity = () => {
  const { products } = useContext(ShopContext);
  const dispatch = useContext(ShopDispatchContext);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(products[0].id);
  const [input, setInput] = useState(`${products[0].quantity}`);

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === selected);

    if (!selectedProduct) {
      setSelected(products[0].id);
      setInput(`${products[0].quantity}`);
    } else {
      setInput(`${selectedProduct.quantity}`);
    }
  }, [products, selected]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (newId: number) => {
    setSelected(newId);
  };

  const handleChange = (input: string) => {
    var newQuantity = parseInt(input, 10);
    if (newQuantity && !input.includes(".") && newQuantity > 0) {
      dispatch(
        updateCart(
          products.map((item) =>
            item.id === selected ? { ...item, quantity: newQuantity } : item
          )
        )
      );
    }
  };

  return (
    <Wrapper>
      <Title>Quantity of</Title>
      <Menu
        isOpen={isOpen}
        selected={selected}
        toggleOpen={toggleOpen}
        handleSelect={handleSelect}
      ></Menu>
      <Title>:</Title>
      <Field
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          handleChange(e.target.value);
        }}
      ></Field>
    </Wrapper>
  );
};