import { Creators, Types } from './actions';

export interface IState {
  needHide: boolean;
}

const initState: IState = {
  needHide: false,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initState, action: ActionTypes) => (
  action.type === Types.MENU_CHANGE_HIDE && {
    ...state,
    needHide: action.needHide,
  }
  || state
);
