import reducer from '../reducer';

describe('movie data reducer', () => {
  test('should return the initial state', () => {
    expect(
      reducer(undefined, {}),
    ).toEqual({
      readyStatus: 'LOADER_INVALID',
      err: null,
      movie: {},
    });
  });

  test('should handle LOADER_REQUESTING', () => {
    expect(
      reducer(undefined, {
        type: 'LOADER_REQUESTING',
        err: null,
        data: [],
      }),
    ).toEqual({
      readyStatus: 'LOADER_REQUESTING',
      err: null,
      movie: {},
    });
  });

  test('should handle LOADER_FAILURE', () => {
    expect(
      reducer(undefined, {
        type: 'LOADER_FAILURE',
        err: 'Oops! Something went wrong.',
        data: [],
      }),
    ).toEqual({
      readyStatus: 'LOADER_FAILURE',
      err: 'Oops! Something went wrong.',
      movie: {},
    });
  });

  test('should handle LOADER_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: 'LOADER_SUCCESS',
        err: null,
        data: { "type": "LOADER_REQUESTING", "data": {"movieening_token": "a4f3e3cc-07f8-4d74-8036-065aa49d82d9"}, "type": "LOADER_SUCCESS"},
      }),
    ).toEqual({
      readyStatus: 'LOADER_SUCCESS',
      err: null,
      movie: { "type": "LOADER_REQUESTING", "data": {"movieening_token": "a4f3e3cc-07f8-4d74-8036-065aa49d82d9"}, "type": "LOADER_SUCCESS"},
    });
  });
});
