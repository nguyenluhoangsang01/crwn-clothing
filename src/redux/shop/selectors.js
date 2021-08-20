import { createSelector } from "reselect";

const selectCollections = (state) => state.shop.collections;

export const selectCollectionsForReview = createSelector(
  selectCollections,
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);
