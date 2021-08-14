import React from "react";
import CollectionItem from "../CollectionItem";
import { CollectionPreviewWrapper } from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewWrapper>
      <h2>{title.toUpperCase()}</h2>
      <div>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
