import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

const selectCollections = (state) => state.shop.collections;

export const selectCollectionsForReview = createSelector(
  selectCollections,
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollectionsLoading = createSelector(
  selectShop,
  (shop) => shop.isLoading
);
