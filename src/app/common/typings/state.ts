import { RouterState } from 'connected-react-router';

import { IState as IPostState } from '@app/post/duck/reducer';

export declare interface IRootState {
  router: RouterState;
  post: IPostState;
}
