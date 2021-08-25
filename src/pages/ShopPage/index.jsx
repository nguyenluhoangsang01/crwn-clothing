import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionOverview from "../../components/CollectionOverview";
import WithSpinner from "../../components/Spinner";
import { fetchCollectionsStart } from "../../redux/shop/actions";
import { selectCollectionsLoading } from "../../redux/shop/selectors";
import CollectionPage from "../CollectionPage";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const match = useRouteMatch();
  const isLoading = useSelector(selectCollectionsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
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
