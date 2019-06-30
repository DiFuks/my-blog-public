import { createSelector } from 'reselect';

import { IRootState } from '@app/reducers';

const getCategoryItems = (state: IRootState) => state.category.items;

export const getCategoryTitle = createSelector(
  [getCategoryItems],
  categoryItems => categoryItems && categoryItems[0] && categoryItems[0].category || '',
);
