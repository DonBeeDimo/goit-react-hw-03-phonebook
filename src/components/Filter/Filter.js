import React from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={s.filter}>
      Find contacts by name{' '}
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter name"
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
