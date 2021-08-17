import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import CollectionPage from "../CollectionPage";

const ShopPage = () => {
  const match = useRouteMatch();

  return (
    <>
      <Route path={`${match.path}`} exact>
        <CollectionOverview />
      </Route>

      <Route path={`${match.path}/:categoryId`} exact>
        <CollectionPage />
      </Route>
    </>
  );
};

export default ShopPage;
