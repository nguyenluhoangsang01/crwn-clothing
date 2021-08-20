import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import WithSpinner from "../../components/Spinner";
import { fetchCollectionsStartAsync } from "../../redux/shop/actions";
import CollectionPage from "../CollectionPage";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionsStartAsync = fetchCollectionsStartAsync(
      dispatch,
      setIsLoading
    );

    return collectionsStartAsync;
  }, [dispatch]);

  return (
    <>
      <Route path={`${match.path}`} exact>
        <CollectionOverviewWithSpinner isLoading={isLoading} />
      </Route>

      <Route path={`${match.path}/:categoryId`} exact>
        <CollectionPageWithSpinner isLoading={isLoading} />
      </Route>
    </>
  );
};

export default ShopPage;
