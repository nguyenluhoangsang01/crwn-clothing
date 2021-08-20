import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import CollectionItem from "../CollectionItem";
import { CollectionPreviewWrapper, Item } from "./CollectionPreview.styles";

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <CollectionPreviewWrapper>
      <h2
        onClick={() => {
          window.scrollTo(0, 0);
          history.push(`${url}/${routeName}`);
        }}
      >
        {title.toUpperCase()}
      </h2>
      <Item>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Item>
    </CollectionPreviewWrapper>
  );
};

export default CollectionPreview;
