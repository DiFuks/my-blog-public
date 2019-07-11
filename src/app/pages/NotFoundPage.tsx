import * as React from 'react';
import { InjectedIntl, injectIntl, FormattedMessage } from 'react-intl';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

import foxImage from '@assets/img/fox.svg';
import { Colors } from '@app/common/constants';

export interface IProps {
  setLayoutTitle: (title: string) => void;
  intl: InjectedIntl;
}

const NotFoundPage: React.FC<IProps> = ({intl, setLayoutTitle}) => {
  React.useEffect(() => {
    setLayoutTitle(intl.formatMessage({id: 'page.not-found'}));
  });

  return (
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
  );
};

const NotFoundPageIntl = injectIntl(NotFoundPage);

export { NotFoundPageIntl as NotFoundPage };

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
