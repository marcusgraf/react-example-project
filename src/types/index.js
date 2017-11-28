/* @flow */

import type { Store as ReduxStore } from 'redux';

export type Home = {
  readyStatus: string,
  err: any,
  movie: Array<Object>,
};

export type Reducer = {
  home: Home,
  router: any,
};

export type Action =
  { type: 'LOADER_REQUESTING' } |
  { type: 'LOADER_SUCCESS', data: Array<Object> } |
  { type: 'LOADER_FAILURE', err: any };

export type Store = ReduxStore<Reducer, Action>;
// eslint-disable-next-line no-use-before-define
export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
export type GetState = () => Object;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type PromiseAction = Promise<Action>;
