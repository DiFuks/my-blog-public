import * as React from 'react';

import { PostContainer as Post } from '@app/post/PostContainer';

interface IProps {
  match: {
    params: {
      url: string;
    };
  };
  title: string;
  setLayoutTitle: (title: string) => void;
}

export const PostPage: React.FC<IProps> = ({match: {params: {url}}, title, setLayoutTitle}) => {
  React.useEffect(() => {
    setLayoutTitle(title);
  }, [title]);

  return (
    <Post url={url}/>
  );
};
