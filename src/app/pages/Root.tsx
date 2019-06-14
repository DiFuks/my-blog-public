import * as React from 'react';

import { LayoutContainer as Layout } from '@app/layout/LayoutContainer';
import { Info } from '@app/info/Info';
import { setTitle } from '@app/common/setTitle';

export const Root: React.FunctionComponent<{}> = () => {
  React.useEffect(() => {
    setTitle('Главная страница');
  }, []);

  return (
    <Layout title='Главная страница'>
      <Info/>
    </Layout>
  );
};
