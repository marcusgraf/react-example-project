/* @flow */

import React from 'react';
import type { Element } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

type Props = { movie: PropTypes.object };

const MovieCard = ({ movie }: Props): Element<'div'> => (
  <div className={styles.MovieCard} style={{ backgroundImage: `url("${movie.full_backdrop_path}")` }}>
    <div className={styles.banner_content_wrapper}>
      <div className={styles.poster}>
        <img src={movie.full_poster_path} alt={movie.title} className={styles.featured_image} />
        <img src="https://res.cloudinary.com/dw369yzsh/image/upload/v1470916845/play_button_ngnw1z.png" alt="Play Trailer" className={styles.play_button} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{movie.title}</h2>

        <p className={styles.description}>
          {movie.overview}
        </p>

        <p className={styles.info}>
          {movie.vote_count} Views<span>|</span>
          {movie.release_date}<span>|</span>
          {movie.vote_average} / 10 Points
        </p>
      </div>
    </div>
  </div>
);

export default MovieCard;
