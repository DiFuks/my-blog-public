import * as React from 'react';

export interface IProps {
  children: React.ReactChild;
}

export const Layout: React.FunctionComponent<IProps> = ({children}) => (
  <div>
    {children}
  </div>
);
