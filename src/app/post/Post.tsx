import * as React from 'react';

import { DefaultFetchingStatuses } from '@app/common/constants';

export interface IProps {
  id: number;
  changeActive: (id: number) => void;
  data: any;
  fetchStatus: DefaultFetchingStatuses;
}

export const Post: React.FunctionComponent<IProps> = ({id, changeActive, data, fetchStatus}) => {
  React.useEffect(() => {
    changeActive(id);
  }, [id]);

  if (fetchStatus === DefaultFetchingStatuses.IN_PROGRESS) {
    return (<div>Загрузка</div>);
  }

  if (fetchStatus === DefaultFetchingStatuses.FAILED) {
    return (<div>Ошибка</div>);
  }

  return (
    <div>{Object.keys(data).map(key => (
        <div key={key}>{key} : {data[key].toString()}<br/></div>
      ))}
    </div>
  );
};
