/* @flow */

import React, { PureComponent } from 'react';
import type { Element } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import Helmet from 'react-helmet';

import * as action from './action';
import type { Home as HomeType, Dispatch, Reducer } from '../../types';
import MovieCard from '../../components/MovieCard';
import SearchForm from '../../components/SearchForm';
import styles from './styles.scss';

type Props = { home: HomeType, fetchMoviesIfNeeded: () => void};

// Export this for unit testing more easily
export class Home extends PureComponent<Props> {
  componentDidMount() {
    this.props.fetchMoviesIfNeeded();
  }

  handleSearchMovies = (seatchTerm) => {
    this.props.fetchMoviesIfNeeded(seatchTerm);
  }

  renderMovieCard = (): Element<'p' | typeof MovieCard> => {
    const { home } = this.props;

    if (
      !home.readyStatus ||
      home.readyStatus === 'LOADER_INVALID'
    ) {
      return <p />;
    }

    if (home.readyStatus === 'LOADER_REQUESTING') {
      return <p>Loading...</p>;
    }

    if (home.readyStatus === 'LOADER_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }

    if (home.movie) {
      console.log(home.movie);
      return <MovieCard movie={home.movie} />;
    }

    return <p />;
  };

  render() {
    return (
      <div className={styles.Home}>
        <SearchForm onSearchValueChange={this.handleSearchMovies} />
        <Helmet title="Home" />
        {this.renderMovieCard()}
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ home }: Reducer) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchMoviesIfNeeded: (searchTerm: string = '') => dispatch(action.fetchMoviesIfNeeded(searchTerm)),
  }),
);

export default connector(Home);
