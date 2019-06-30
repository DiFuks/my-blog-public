import * as React from 'react';
import { Box } from 'grid-styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as moment from 'moment';

import { Colors, Routes } from '@app/common/constants';

export interface IProps {
  category: string;
  title: string;
  description: string;
  url: string;
  date: string;
}

export const CategoryItem: React.FC<IProps> = React.memo(({category, title, description, url, date}) => (
  <CategoryItemStyled
    to={Routes.POST.replace(':url', url)}
  >
    <CategoryStyled>{category}</CategoryStyled>
    <TitleStyled>{title}</TitleStyled>
    <DescriptionStyled>{description}</DescriptionStyled>
    <DateStyled>{moment(date).format('DD.MM.YYYY')}</DateStyled>
  </CategoryItemStyled>
));

const CategoryItemStyled = styled(Link)`
  box-shadow: 0 0 1px 0 ${Colors.GREY_160};
  display: flex;
  text-decoration: none;
  width: 100%;
  background: ${Colors.GREY_45};
  flex-direction: column;
  transition: opacity .2s ease, transform .2s ease;
  cursor: pointer;
  color: ${Colors.GREY_200};
  justify-content: space-between;
  opacity: .8;
  border-radius: 3px;
  overflow: hidden;
  &:hover {
    opacity: 1;
    transform: scale(1.03);
  }
`;

const CategoryStyled = styled(Box)`
  padding: 1rem 2rem;
  background: ${Colors.GREY_37};
  text-align: center;
  font-size: 1.4rem;
`;

const TitleStyled = styled(Box)`
  padding: 2rem 2rem 1rem;
  text-align: center;
  font-weight: bold;
  color: ${Colors.WHITE};
`;

const DescriptionStyled = styled(Box)`
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.4;
`;

const DateStyled = styled(Box)`
  padding: 1rem 2rem;
  text-align: right;
  color: ${Colors.GREY_100};
  font-size: 1.2rem;
`;
