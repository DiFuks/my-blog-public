import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';

import { reducer as postReducer, IState as IPostState } from '@app/post/duck/reducer';
import { reducer as submenuReducer, IState as ISubmenuState } from '@app/submenu/duck/reducer';
import { reducer as menuReducer, IState as IMenuState } from '@app/menu/duck/reducer';
import { reducer as chatReducer, IState as IChatState } from '@app/chat/duck/reducer';
import { reducer as layoutReducer, IState as ILayoutState } from '@app/layout/duck/reducer';
import { reducer as infoReducer, IState as IInfoReducer } from '@app/info/duck/reducer';
import { reducer as categoryReducer, IState as ICategoryReducer } from '@app/category/duck/reducer';

export interface IRootState {
  router: RouterState;
  submenu: ISubmenuState;
  post: IPostState;
  menu: IMenuState;
  chat: IChatState;
  layout: ILayoutState;
  info: IInfoReducer;
  category: ICategoryReducer;
}

export const createRootReducer = (history: History) => combineReducers<IRootState>({
  router: connectRouter(history),
  submenu: submenuReducer,
  post: postReducer,
  menu: menuReducer,
  chat: chatReducer,
  layout: layoutReducer,
  info: infoReducer,
  category: categoryReducer,
});
