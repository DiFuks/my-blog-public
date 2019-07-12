import * as React from 'react';
import { Helmet } from 'react-helmet';

import { InjectedIntl, injectIntl } from 'react-intl';

export interface IProps {
  title?: string;
  description?: string;
  intl: InjectedIntl;
}

const MainHelmet: React.FC<IProps> = ({intl, title = '', description = ''}) => (
  <Helmet
    titleTemplate={`%s | ${intl.formatMessage({id: 'page.postfix'})}`}
  >
    <title>
      {title}
    </title>
    <meta
      name='description'
      content={description}
    />
  </Helmet>
);

const MainHelmetIntl = injectIntl(MainHelmet);

export { MainHelmetIntl as MainHelmet };
