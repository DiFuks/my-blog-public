import * as React from 'react';

import { Layout } from '../layout';
import { Post as PostComponent } from '../post';

interface IProps {
  match: {
    params: {
      id: number,
    },
  };
}

export const Post: React.FunctionComponent<IProps> = ({match: {params: {id}}}) => (
  <Layout title={`Конкретный пост с id ${id}`}>
    <PostComponent id={id}/>
  </Layout>
);
