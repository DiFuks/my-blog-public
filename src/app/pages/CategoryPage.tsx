import * as React from 'react';

import { CategoryContainer as Category } from '@app/category/CategoryContainer';

interface IProps {
  match: {
    params: {
      url: string;
    };
  };
  title: string;
  setLayoutTitle: (title: string) => void;
}

export const CategoryPage: React.FC<IProps> = ({match: {params: {url}}, title, setLayoutTitle}) => {
  React.useEffect(() => {
    setLayoutTitle(title);
  }, [title]);

  return (
    <Category url={url}/>
  );
};
