import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { InjectedIntl, injectIntl } from 'react-intl';
import { getBaseUrlByLocale } from '@app/common/helpers/getBaseUrlByLocale';
import { Locales } from '@app/common/constants';

export interface IProps extends LinkProps {
  intl: InjectedIntl;
  to: string;
}

const LinkLocalized: React.FC<IProps> = ({to, intl, ...props}) => (
  <Link
    to={getBaseUrlByLocale(intl.locale as Locales) + to}
    {...props}
  />
);

const LinkLocalizedIntl = injectIntl(LinkLocalized);

export { LinkLocalizedIntl as LinkLocalized };
