import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import CustomButton from "../CustomButton";
import {
  CollectionFooter,
  CollectionItemWrapper,
} from "./CollectionItem.styles";

const CollectionItem = ({ item, addItem }) => {
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

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
