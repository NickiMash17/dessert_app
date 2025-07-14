import React from 'react';
import PropTypes from 'prop-types';

const categories = [
  'All',
  'Cakes',
  'Cookies',
  'Pies',
  'Ice Cream',
  'Macarons',
  'Cheesecake',
  'Donuts',
];

const CategoryChips = ({ selected, onSelect }) => (
  <div className="category-chips">
    {categories.map(cat => (
      <button
        key={cat}
        className={`chip${selected === cat ? ' chip-active' : ''}`}
        onClick={() => onSelect(cat)}
        type="button"
        aria-pressed={selected === cat}
      >
        {cat}
      </button>
    ))}
  </div>
);

CategoryChips.propTypes = {
  selected: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CategoryChips; 