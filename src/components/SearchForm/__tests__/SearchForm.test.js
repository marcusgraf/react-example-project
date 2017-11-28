import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import SearchForm from '../index';

describe('<SearchForm />', () => {
  test('renders', () => {
    const tree = renderer.create(
      <StaticRouter context={{}}>
        <SearchForm />
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
