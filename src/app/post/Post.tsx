import * as React from 'react';

import { DefaultFetchingStatuses } from '@app/common/constants';
import { IPost } from '@app/post/duck/reducer';

export interface IProps {
  url: string;
  changeActive: (url: string) => void;
  data: IPost;
  fetchStatus: DefaultFetchingStatuses;
}

export const Post: React.FunctionComponent<IProps> = ({url, changeActive, data, fetchStatus}) => {
  React.useEffect(() => {
    changeActive(url);
  }, [url]);

  if (fetchStatus === DefaultFetchingStatuses.IN_PROGRESS || fetchStatus === DefaultFetchingStatuses.NONE) {
    return (<div>Загрузка</div>);
  }

  if (fetchStatus === DefaultFetchingStatuses.FAILED) {
    return (<div>Ошибка</div>);
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <div>{data.content}</div>
    </div>
  );
};
