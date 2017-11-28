/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

type Props = { onSearchValueChange: PropTypes.func };

class SearchForm extends Component<Props> {
  constructor(props) {
    super(props);
    this.placeholder = 'Search for a movie';
  }

  handleInputChange = () => {
    const name = this._name.value;
    this.props.onSearchValueChange(name);
  };

  render() {
    return (
      <div className={styles.SearchForm}>
        <input type="text" ref={(input) => { this._name = input; }} onChange={this.handleInputChange} placeholder={this.placeholder} />
      </div>
    );
  }
}

export default SearchForm;
