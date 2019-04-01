import * as React from 'react';

import { Layout } from '../layout';
import { Info } from '../info';

export const Root: React.FunctionComponent<{}> = () => (
  <Layout title='Главная страница'>
    <Info/>
  </Layout>
);
