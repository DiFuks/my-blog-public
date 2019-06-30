import * as React from 'react';
import { Box, Flex } from 'grid-styled';
import styled from 'styled-components';

import { IInfoItem } from '@app/category/duck/reducer';

import { CategoryItem } from '@app/category/CategoryItem';

export interface IProps {
  items: IInfoItem[];
}

export const CategoryList: React.FC<IProps> = ({items}) => (
  <CategoryListStyled>
    {items.map(item => (
        <CategoryItemWrapperStyled
          pr={[0, 0, '2rem']}
          pb='3rem'
          width={['100%', '100%', '33.333333%']}
        >
          <CategoryItem
            category={item.category}
            date={item.date}
            title={item.title}
            url={item.url}
            description={item.description}
          />
        </CategoryItemWrapperStyled>
    ))}
  </CategoryListStyled>
);

const CategoryListStyled = styled(Flex)`
  margin-right: -2rem;
  margin-top: 2rem;
  width: 100%;
  flex-wrap: wrap;
`;

const CategoryItemWrapperStyled = styled(Box)`
  display: flex;
`;
