import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';

import MovieCard from '../index';

describe('<MovieCard />', () => {
  test('renders', () => {
    const mockData = JSON.parse('{"vote_count":7141,"id":11,"video":false,"vote_average":8.1,"title":"Star Wars",' +
      '"popularity":29.242203,"poster_path":"/btTdmkgIvOi0FFip1sPuZI2oQG6.jpg","original_language":"en",' +
      '"original_title":"Star Wars","genre_ids":[12,28,878],"backdrop_path":"/c4zJK1mowcps3wvdrm31knxhur2.jpg",' +
      '"adult":false,"overview":"Princess Leia is captured and held hostage by the evil Imperial forces in ' +
      'their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han ' +
      'Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and ' +
      'restore peace and justice in the Empire.","release_date":"1977-05-25","full_poster_path":' +
      '"https://image.tmdb.org/t/p/w500//btTdmkgIvOi0FFip1sPuZI2oQG6.jpg","full_backdrop_path":"' +
      'https://image.tmdb.org/t/p/w500//c4zJK1mowcps3wvdrm31knxhur2.jpg","' +
      'listening_token":"05159528-6c9a-45f1-a840-3167340d751d"}');
    const tree = renderer.create(
      <StaticRouter context={{}}>
        <MovieCard movie={mockData} />
      </StaticRouter>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
