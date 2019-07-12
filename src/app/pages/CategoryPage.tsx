import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';

import { CategoryContainer as Category } from '@app/category/CategoryContainer';
import { MainHelmet } from '@app/common/components/MainHelmet';

interface IProps {
  match: {
    params: {
      url: string;
    };
  };
  title: string;
  intl: InjectedIntl;
}

const CategoryPage: React.FC<IProps> = ({match: {params: {url}}, title, intl}) => (
  <>
    <MainHelmet
      title={title}
      description={`${title}. ${intl.formatMessage({id: 'page.category-description'})}`}
    />
    <Category url={url}/>
  </>
);

const CategoryPageIntl = injectIntl(CategoryPage);

export { CategoryPageIntl as CategoryPage };
