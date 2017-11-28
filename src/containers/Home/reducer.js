/* @flow */

import _ from 'lodash/fp';

import type { Home, Action } from '../../types';

type State = Home;

const initialState = {
  readyStatus: 'LOADER_INVALID',
  err: null,
  movie: {},
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'LOADER_REQUESTING':
      return _.assign(state, {
        readyStatus: 'LOADER_REQUESTING',
      });
    case 'LOADER_FAILURE':
      return _.assign(state, {
        readyStatus: 'LOADER_FAILURE',
        err: action.err,
      });
    case 'LOADER_SUCCESS':
      return _.assign(state, {
        readyStatus: 'LOADER_SUCCESS',
        movie: action.data,
      });
    default:
      return state;
  }
};
