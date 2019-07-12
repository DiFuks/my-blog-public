import * as React from 'react';

import { PostContainer as Post } from '@app/post/PostContainer';
import { MainHelmet } from '@app/common/components/MainHelmet';

interface IProps {
  match: {
    params: {
      url: string;
    };
  };
  title: string;
  description: string;
}

export const PostPage: React.FC<IProps> = ({match: {params: {url}}, title, description}) => (
  <>
    <MainHelmet
      title={title}
      description={description}
    />
    <Post url={url}/>
  </>
);
