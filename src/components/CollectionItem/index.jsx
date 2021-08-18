import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../CustomButton";
import {
  CollectionFooter,
  CollectionItemWrapper,
} from "./CollectionItem.styles";

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();

  const addItemDispatch = (item) => {
    dispatch(addItem(item));
  };

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
        onClick={() => addItemDispatch(item)}
      >
        add to cart
      </CustomButton>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;
