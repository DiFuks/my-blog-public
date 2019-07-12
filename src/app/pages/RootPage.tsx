import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';

import { InfoContainer as Info } from '@app/info/InfoContainer';
import { MainHelmet } from '@app/common/components/MainHelmet';

export interface IProps {
  intl: InjectedIntl;
}

const RootPage: React.FC<IProps> = ({intl}) => (
  <>
    <MainHelmet
      title={intl.formatMessage({id: 'page.root'})}
      description={intl.formatMessage({id: 'page.root'})}
    />
    <Info/>
  </>
);

const RootIntl = injectIntl(RootPage);

export default RootIntl;
