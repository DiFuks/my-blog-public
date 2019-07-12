import * as React from 'react';
import { InjectedIntl, injectIntl, FormattedMessage } from 'react-intl';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import foxImage from '@assets/img/fox.svg';
import { Colors } from '@app/common/constants';
import { MainHelmet } from '@app/common/components/MainHelmet';

export interface IProps {
  intl: InjectedIntl;
}

const NotFoundPage: React.FC<IProps> = ({intl}) => (
  <>
    <MainHelmet
      title={intl.formatMessage({id: 'page.not-found'})}
      description={intl.formatMessage({id: 'page.not-found-image'})}
    />
    <NotFoundStyled>
      <img
        src={foxImage}
        alt={intl.formatMessage({id: 'page.not-found-image'})}
      />
      <Box>
        <FormattedMessage
          id='page.not-found'
        />
      </Box>
    </NotFoundStyled>
  </>
);

const NotFoundPageIntl = injectIntl(NotFoundPage);

export default NotFoundPageIntl;

const NotFoundStyled = styled(Flex)`
  align-items: center;
  flex-direction: column;
  color: ${Colors.GREY_160};
  font-size: 2rem;
  img {
    max-height: 50rem;
    max-width: 100%;
    filter: grayscale(100);
  }
`;
