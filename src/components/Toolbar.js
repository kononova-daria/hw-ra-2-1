import React from 'react';
import PropTypes from 'prop-types';

function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <div className="filters">
      {filters.map((item) => <button type="button" key={item} className={item === selected ? 'filter selected-filter' : 'filter'} onClick={onSelectFilter}>{item}</button>)}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
}
  
export default Toolbar;