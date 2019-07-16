import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';

import { FetchingStatuses, Locales } from '@app/common/constants';

import { IInfoItem } from './duck/reducer';
import { CategoryList } from './CategoryList';

export interface IProps {
  url: string;
  changeActive: (url: string, locale?: Locales) => void;
  items: IInfoItem[];
  fetchStatus: FetchingStatuses;
  intl: InjectedIntl;
}

const Category: React.FC<IProps> = ({url, items, changeActive, fetchStatus, intl}) => {
  React.useEffect(() => {
    changeActive(url, intl.locale as Locales);

    return () => changeActive(null);
  }, [url]);

  if (fetchStatus === FetchingStatuses.FAILED) {
    return (
      <div>Ошибка :(</div>
    );
  }

  return (
    <CategoryList items={items}/>
  );
};

const CategoryIntl = injectIntl(Category);

export { CategoryIntl as Category };
