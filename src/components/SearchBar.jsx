import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ value, onChange }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search desserts or authors..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="search-input"
      aria-label="Search recipes"
    />
    <span className="search-icon" aria-hidden="true">🔍</span>
  </div>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar; 