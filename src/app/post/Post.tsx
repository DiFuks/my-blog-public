import * as React from 'react';

export interface IProps {
  id: number;
}

export const Post: React.FunctionComponent<IProps> = ({id}) => (
  <div>Конкретный пост. ID: {id}</div>
);
