import { Creators, Types } from './actions';

export interface IState {
  title: string;
}

const initState: IState = {
  title: '',
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initState, action: ActionTypes): IState => (
  action.type === Types.LAYOUT_SET_TITLE && {
    ...state,
    title: action.title,
  } ||
  state
);
