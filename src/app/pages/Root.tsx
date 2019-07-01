import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';

import { InfoContainer as Info } from '@app/info/InfoContainer';

export interface IProps {
  setLayoutTitle: (title: string) => void;
  intl: InjectedIntl;
}

const Root: React.FC<IProps> = ({setLayoutTitle, intl}) => {
  React.useEffect(() => {
    setLayoutTitle(intl.formatMessage({id: 'page.root'}));
  }, []);

  return (
    <Info/>
  );
};

const RootIntl = injectIntl(Root);

export { RootIntl as Root };
