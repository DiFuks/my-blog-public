import { Locales } from '@app/common/constants';

import { Creators, Types } from './actions';

export interface IState {
  title: string;
  locale: Locales;
}

const initState: IState = {
  title: '',
  locale: null,
};

type ActionTypes = ReturnType<InferValueTypes<typeof Creators>>;

export const reducer = (state = initState, action: ActionTypes): IState => (
  action.type === Types.LAYOUT_SET_TITLE && {
    ...state,
    title: action.title,
  } ||
  action.type === Types.LAYOUT_SET_LOCALE && {
    ...state,
    locale: action.locale,
  } ||
  state
);
