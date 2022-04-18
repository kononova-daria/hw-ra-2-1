import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({filters, projects}) {
  const [filter, setFilter] = useState('All');
  let images = null;

  function choosingCategory(category) {
    return setFilter(category)
  }

  if (filter === 'All') {
    images = projects;
  } else {
    images = projects.filter((item) => item.category === filter);
  }

  return (
    <div className="main-content">
      <Toolbar filters={filters} 
               selected={filter}
               onSelectFilter={(filter) => choosingCategory(filter.target.innerText)}/>
      <ProjectList projects={images}/>
    </div>
  );
}

Portfolio.propTypes = {
  filters: PropTypes.array.isRequired,
  projects:  PropTypes.array.isRequired,
}
  
export default Portfolio;