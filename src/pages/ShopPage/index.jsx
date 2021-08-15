import React, { useState } from "react";
import CollectionPreview from "../../components/CollectionPreview";
import { SHOP_DATA } from "./shopPage.data";

const ShopPage = () => {
  const [collections] = useState(SHOP_DATA);

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
