import React, { useContext } from "react";
import { CartContext } from "../../providers/carts/provider";
import CustomButton from "../CustomButton";
import {
  CollectionFooter,
  CollectionItemWrapper,
} from "./CollectionItem.styles";

const CollectionItem = ({ item }) => {
  const { addItem } = useContext(CartContext);

  return (
    <CollectionItemWrapper imageUrl={item.imageUrl}>
      <div className="bgc" />

      <CollectionFooter>
        <span>{item.name}</span>
        <span>{item.price}</span>
      </CollectionFooter>

      <CustomButton
        inverted
        className="custom-button"
        onClick={() => addItem(item)}
      >
        add to cart
      </CustomButton>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;
