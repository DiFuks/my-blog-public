import * as React from 'react';

import { InfoContainer as Info } from '@app/info/InfoContainer';

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
