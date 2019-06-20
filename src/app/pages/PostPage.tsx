import * as React from 'react';

import { LayoutContainer as Layout } from '@app/layout/LayoutContainer';
import { PostContainer as Post } from '@app/post/PostContainer';

interface IProps {
  match: {
    params: {
      url: string;
    };
  };
  title: string;
}

export const PostPage: React.FC<IProps> = React.memo(({match: {params: {url}}, title}) => (
  <Layout title={title}>
    <Post url={url}/>
  </Layout>
));
