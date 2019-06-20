import * as React from 'react';

import { LayoutContainer as Layout } from '@app/layout/LayoutContainer';
import { Info } from '@app/info/Info';

export const Root: React.FC = React.memo(() => (
  <Layout title='Главная страница'>
    <Info/>
  </Layout>
));

export { Root as default };
