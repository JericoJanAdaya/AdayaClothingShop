import { useContext } from "react";
import {
  IconWrapper,
  ListWrapper,
  OptionWrapper,
  SelectedWrapper,
  Title,
  Wrapper,
} from ".";
import { ShopContext } from "../contexts";

import { MdExpandMore } from "react-icons/md";

interface MenuProps {
  isOpen: boolean;
  selected: number;
  toggleOpen: () => void;
  handleSelect: (newId: number) => void;
}

export const Menu: React.FC<MenuProps> = (
  props: MenuProps
) => {
  const {products} = useContext(ShopContext);
  const selectedProduct = products
    ? products.find((item) => {
        return item.id === props.selected;
      })
    : null;
  const unselected = products.filter((item) => item.id !== props.selected);

  return (
    <Wrapper>
      <SelectedWrapper onClick={props.toggleOpen}>
        <Title>{selectedProduct ? selectedProduct.name : ""}</Title>
        <IconWrapper>
          <MdExpandMore />
        </IconWrapper>
      </SelectedWrapper>
      {props.isOpen && (
        <ListWrapper>
          <ul>
            {unselected.map((product, index) => (
              <li key={index}>
                <OptionWrapper
                  onClick={() => {
                    props.handleSelect(product.id);
                    props.toggleOpen();
                  }}
                >
                  {product.name}
                </OptionWrapper>
              </li>
            ))}
          </ul>
        </ListWrapper>
      )}
    </Wrapper>
  );
};
