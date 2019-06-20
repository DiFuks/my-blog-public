import * as React from 'react';

import { LayoutContainer as Layout } from '@app/layout/LayoutContainer';
import { PostContainer as Post } from '@app/post/PostContainer';
import { setTitle } from '@app/common/helpers/setTitle';

interface IProps {
  match: {
    params: {
      url: string;
    };
  };
  title: string;
}

export const PostPage: React.FC<IProps> = ({match: {params: {url}}, title}) => {
  React.useEffect(() => {
    setTitle(title);
  }, [title]);

  return (
    <Layout title={title}>
      <Post url={url}/>
    </Layout>
  );
};
