import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import CollectionItem from "../../components/CollectionItem";
import { selectCollectionsForReview } from "../../redux/shop/selectors";
import { CollectionPageWrapper } from "./CollectionPage.styles";

const CollectionPage = () => {
  const {
    params: { categoryId },
  } = useRouteMatch();

  const collections = useSelector(selectCollectionsForReview);

  return (
    <CollectionPageWrapper>
      {collections
        ?.filter(
          (collection) =>
            collection.routeName.toUpperCase() === categoryId.toUpperCase()
        )
        .map((collection) => (
          <div key={collection.id}>
            <h1>{collection.title}</h1>
            <div className="items">
              {collection.items.map((item) => (
                <CollectionItem item={item} key={item.id} />
              ))}
            </div>
          </div>
        ))}
    </CollectionPageWrapper>
  );
};

export default CollectionPage;
