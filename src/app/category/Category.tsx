import * as React from 'react';

import { CategoryList } from '@app/category/CategoryList';
import { FetchingStatuses } from '@app/common/constants';

import { IInfoItem } from './duck/reducer';

export interface IProps {
  url: string;
  changeActive: (url: string) => void;
  items: IInfoItem[];
  fetchStatus: FetchingStatuses;
}

export const Category: React.FC<IProps> = ({url, items, changeActive, fetchStatus}) => {
  React.useEffect(() => {
    changeActive(url);

    return () => changeActive(null);
  }, []);

  if (fetchStatus === FetchingStatuses.FAILED) {
    return (
      <div>Ошибка :(</div>
    );
  }

  return (
    <CategoryList items={items}/>
  );
};
