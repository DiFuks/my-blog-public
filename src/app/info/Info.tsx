import * as React from 'react';
import { Box, Flex } from 'grid-styled';
import styled from 'styled-components';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';

import { Colors } from '@app/common/constants';
import { IInfoItem } from '@app/category/duck/reducer';
import { CategoryList } from '@app/category/CategoryList';

export interface IProps {
  isInit: boolean;
  items: IInfoItem[];
  init: () => void;
}

export const Info: React.FC<IProps> = ({isInit, items, init}) => {
  React.useEffect(() => {
    if (!isInit) {
      init();
    }
  }, []);

  return (
    <InfoWrapperStyled>
      <InfoStyled>
        <Box
          fontSize='2.5rem'
          mb='2rem'
          mt={['4rem', '4rem', '2rem']}
        >
          <FormattedMessage id='page.hello'/>
        </Box>
        <Box>
          <FormattedHTMLMessage id='page.info'/>
        </Box>
      </InfoStyled>
      <Box
        mt='4rem'
        mb='2rem'
        fontSize='2.5rem'
      >
        <FormattedMessage id='page.new-posts'/>
      </Box>
      <CategoryList items={items}/>
    </InfoWrapperStyled>
  );
};

const InfoStyled = styled(Flex)`
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid ${Colors.GREY_80};
  padding-bottom: 4rem;
  line-height: 1.4;
`;

const InfoWrapperStyled = styled(Flex)`
  flex-direction: column;
  flex-shrink: 0;
`;
