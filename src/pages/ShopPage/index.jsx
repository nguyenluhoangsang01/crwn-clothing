import React from "react";
import { useSelector } from "react-redux";
import CollectionPreview from "../../components/CollectionPreview";
import { selectCollections } from "../../redux/shop/selectors";

const ShopPage = () => {
  const collections = useSelector(selectCollections);

  return collections.map((collection) => (
    <CollectionPreview
      key={collection.id}
      title={collection.title}
      routeName={collection.routeName}
      items={collection.items}
    />
  ));
};

export default ShopPage;
