/* @flow */

import type {
  Dispatch,
  GetState,
  ThunkAction,
} from '../../types';

export const API_URL = 'https://sbot-fe-test.herokuapp.com/api/v1/movies';

// Export this for unit testing more easily
export const fetchMovies = (axios: any, searchTerm: string = 'Star Wars', URL: string = API_URL): ThunkAction =>
  async (dispatch: Dispatch) => {
    dispatch({ type: 'LOADER_REQUESTING' });

    try {
      const res = await axios.get(`${URL}?query=${searchTerm}`);

      dispatch({ type: 'LOADER_SUCCESS', data: res.data });
    } catch (err) {
      dispatch({ type: 'LOADER_FAILURE', err: err.message });
    }
  };

/* istanbul ignore next */
export const fetchMoviesIfNeeded = (searchTerm: string = 'Star Wars'): ThunkAction =>
  (dispatch: Dispatch, getState: GetState, axios: any) => {
    /* istanbul ignore next */
    if (searchTerm !== '') {
      /* istanbul ignore next */
      return dispatch(fetchMovies(axios, searchTerm));
    }

    /* istanbul ignore next */
    return null;
  };
