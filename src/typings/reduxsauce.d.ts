/* tslint:disable */
declare module 'reduxsauce' {
  import { AnyAction, Reducer } from 'redux';

  export interface Actions {
    [action: string]: string[] | null;
  }

  export interface ActionTypes {
    [action: string]: string;
  }

  export interface ActionCreators {
    [action: string]: (...args: any[]) => AnyAction;
  }

  export interface Handlers<S> {
    [type: string]: (state: S, action: AnyAction) => S;
  }

  interface Options {
    prefix: string;
  }

  interface CreatedActions {
    Types: ActionTypes;
    Creators: ActionCreators;
  }

  export function createActions(
    actions: Actions,
    options?: Options
  ): CreatedActions;

  export function createReducer<S>(
    initialState: S,
    handlers: Handlers<S>
  ): Reducer<S>;

  export function createTypes(types: string, options?: Options): ActionTypes;
}
