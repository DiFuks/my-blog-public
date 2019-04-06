import * as React from 'react';

import { Layout } from '@app/layout';
import { Post as PostComponent } from '@app/post';

interface IProps {
  match: {
    params: {
      url: string,
    },
  };
}

export const Post: React.FunctionComponent<IProps> = ({match: {params: {url}}}) => (
  <Layout title={url}>
    <PostComponent url={url}/>
  </Layout>
);
