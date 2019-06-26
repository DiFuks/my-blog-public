import * as React from 'react';

import { Info } from '@app/info/Info';

export interface IProps {
  setLayoutTitle: (title: string) => void;
}

export const Root: React.FC<IProps> = ({setLayoutTitle}) => {
  React.useEffect(() => {
    setLayoutTitle('Главная страница');
  }, []);

  return (
    <Info/>
  );
};
