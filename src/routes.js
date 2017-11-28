/* @flow */

import type { Dispatch } from './types';
import { fetchMoviesIfNeeded } from './containers/Home/action';
import HomePage from './containers/Home';
import NotFoundPage from './containers/NotFound';

export default [
  {
    path: '/',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) => Promise.all([
      dispatch(fetchMoviesIfNeeded()), // Register your server-side call action(s) here
    ]),
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
