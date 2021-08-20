import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import CollectionItem from "../CollectionItem";
import {
  CollectionPreviewWrapper,
  Item,
  Title,
} from "./CollectionPreview.styles";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";

const CollectionPreview = ({ title, items, routeName }) => {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <CollectionPreviewWrapper>
      <Title
        onClick={() => {
          window.scrollTo(0, 0);
          history.push(`${url}/${routeName}`);
        }}
        title={`See all ${title.slice(0, -1).toLowerCase()} collections`}
      >
        <h2>{title.toUpperCase()}</h2>
        <ArrowRight />
      </Title>
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
