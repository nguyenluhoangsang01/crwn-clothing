import React from "react";
import CollectionItem from "../CollectionItem";
import { CollectionPreviewWrapper } from "./CollectionPreview.styles";

const CollectionPreview = ({ title, routeName, items }) => {
  return (
    <CollectionPreviewWrapper>
      <h2>{title.toUpperCase()}</h2>
      <div>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          ))}
      </div>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
