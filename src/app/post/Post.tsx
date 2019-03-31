import * as React from 'react';

import { DefaultFetchingStatuses } from '@app/common/constants';

export interface IProps {
  id: number;
  changeActive: (id: number) => void;
  data: any;
  fetchStatus: DefaultFetchingStatuses;
}

export class Post extends React.Component<IProps> {

  public componentWillMount(): void {
    this.props.changeActive(this.props.id);
  }

  public render() {
    if (this.props.fetchStatus === DefaultFetchingStatuses.IN_PROGRESS) {
      return (<div>Загрузка</div>);
    }

    if (this.props.fetchStatus === DefaultFetchingStatuses.FAILED) {
      return (<div>Ошибка</div>);
    }

    return (
      <div>{Object.keys(this.props.data).map(key => (
          <div key={key}>{key} : {this.props.data[key].toString()}<br/></div>
        ))}
      </div>
    );
  }
}
