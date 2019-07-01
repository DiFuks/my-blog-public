import { switchLocale } from '@app/common/helpers/switchLocale';
import * as React from 'react';
import { Flex } from 'grid-styled';
import { InjectedIntl, injectIntl } from 'react-intl';
import styled from 'styled-components';

import { Colors, Locales, ScreenWidthBreakpoints } from '@app/common/constants';

export interface IProps {
  children: string;
  intl: InjectedIntl;
}

const Header: React.FC<IProps> = React.memo(({children, intl}) => {
  const localeToSwitch = intl.locale === Locales.RU ? Locales.EN : Locales.RU;

  return (
    <HeaderStyled>
      {children}
      <HeaderLocaleStyled
        onClick={() => {
          switchLocale(localeToSwitch);
        }}
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

const HeaderLocaleStyled = styled.div`
  position: absolute;
  right: 1rem;
  cursor: pointer;
  :hover {
    color: ${Colors.WHITE};
  }
`;
