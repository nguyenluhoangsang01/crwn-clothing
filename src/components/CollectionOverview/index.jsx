import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForReview } from "../../redux/shop/selectors";
import CollectionPreview from "../CollectionPreview";
import { CollectionOverviewWrapper } from "./CollectionOverview.styles";

const CollectionOverview = () => {
  const collections = useSelector(selectCollectionsForReview);

  return (
    <CollectionOverviewWrapper>
      {collections?.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          routeName={collection.routeName}
          items={collection.items}
        />
      ))}
    </CollectionOverviewWrapper>
  );
};

export default CollectionOverview;
