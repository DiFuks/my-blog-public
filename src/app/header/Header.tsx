import * as React from 'react';
import { Flex } from 'grid-styled';
import { InjectedIntl, injectIntl } from 'react-intl';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Colors, Locales, ScreenWidthBreakpoints } from '@app/common/constants';
import { getBaseUrlByLocale } from '@app/common/helpers/getBaseUrlByLocale';
import { getUrlWithoutLocale } from '@app/common/helpers/getUrlWithoutLocale';

export interface IProps {
  intl: InjectedIntl;
}

const Header: React.FC<IProps> = React.memo(({children, intl}) => {
  const localeToSwitch = intl.locale === Locales.RU ? Locales.EN : Locales.RU;

  return (
    <HeaderStyled>
      {children}
      <HeaderLocaleStyled
        to={getBaseUrlByLocale(localeToSwitch) + getUrlWithoutLocale(intl.locale as Locales)}
      >
        {localeToSwitch}
      </HeaderLocaleStyled>
    </HeaderStyled>
  );
});

const HeaderIntl = injectIntl(Header);

export { HeaderIntl as Header };

const HeaderStyled = styled(Flex)`
  width: 100%;
  height: 2.5rem;
  background: ${Colors.GREY_45};
  color: ${Colors.GREY_186};
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.03rem;
  flex-shrink: 0;
  position: relative;
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    opacity: .9;
  }
  @media (max-width: ${ScreenWidthBreakpoints.TABLET}px) {
    position: fixed;
    z-index: 10;
  }
`;

const HeaderLocaleStyled = styled(Link)`
  position: absolute;
  right: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: ${Colors.GREY_200};
  :hover {
    color: ${Colors.WHITE};
  }
`;
