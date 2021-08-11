import React from "react";
import {
  CollectionFooter,
  CollectionItemWrapper,
} from "./CollectionItem.styles";

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <CollectionItemWrapper imageUrl={imageUrl}>
      <div className="bgc" />
      <CollectionFooter>
        <span>{name}</span>
        <span>{price}</span>
      </CollectionFooter>
    </CollectionItemWrapper>
  );
};

export default CollectionItem;
